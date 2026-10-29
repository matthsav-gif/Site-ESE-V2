// Avis Google de la fiche ESE, servis au site (fonction Vercel).
// Variables : GOOGLE_PLACES_API_KEY (obligatoire), GOOGLE_PLACE_ID (facultatif : sinon recherche de la fiche par nom et adresse).
// Seuls les avis de 4 étoiles et plus sont renvoyés. Réponse mise en cache 12 h sur le CDN Vercel.
const QUERY = "Event & Safety Engineering, 15 rue des Halles, 75001 Paris";

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const lang = req.query?.lang === "en" ? "en" : "fr";
  if (!key) { res.setHeader("Cache-Control", "s-maxage=600"); return res.status(200).send(JSON.stringify({ reviews: [] })); }
  try {
    let placeId = process.env.GOOGLE_PLACE_ID;
    if (!placeId) {
      const s = await fetch("https://places.googleapis.com/v1/places:searchText", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Goog-Api-Key": key, "X-Goog-FieldMask": "places.id" },
        body: JSON.stringify({ textQuery: QUERY, languageCode: "fr" }),
      }).then((r) => r.json());
      placeId = s?.places?.[0]?.id;
    }
    if (!placeId) throw new Error("fiche introuvable");
    const p = await fetch(`https://places.googleapis.com/v1/places/${placeId}?languageCode=${lang}`, {
      headers: { "X-Goog-Api-Key": key, "X-Goog-FieldMask": "rating,userRatingCount,reviews,googleMapsUri" },
    }).then((r) => r.json());
    const reviews = (p.reviews || [])
      .filter((r) => (r.rating || 0) >= 4 && (r.text?.text || r.originalText?.text))
      .map((r) => ({
        rating: r.rating,
        text: (r.text?.text || r.originalText?.text || "").slice(0, 600),
        author: r.authorAttribution?.displayName || "Client Google",
        authorUri: r.authorAttribution?.uri || null,
        when: r.relativePublishTimeDescription || "",
      }));
    res.setHeader("Cache-Control", "s-maxage=43200, stale-while-revalidate=86400");
    return res.status(200).send(JSON.stringify({ rating: p.rating || null, count: p.userRatingCount || 0, url: p.googleMapsUri || null, reviews }));
  } catch (e) {
    res.setHeader("Cache-Control", "s-maxage=600");
    return res.status(200).send(JSON.stringify({ reviews: [], error: "indisponible" }));
  }
}
