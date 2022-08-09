export interface ICat {
  id: string;
  name: string;
  temperament: string;
  alt_names: string;
  reference_image_id: string | null;
  image: {
    id: string;
    url: string;
  } | null;
  weight_imperial: string;
  wikipedia_url: string;
}
