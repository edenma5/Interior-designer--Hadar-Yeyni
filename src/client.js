import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "k78q23jp",
  dataset: "production",
  apiVersion: "2022-02-01",
  token:
    "skZHpGLCxwi5QVQRhthNVu0OyMOYXd21uU6HT6B21xbnStPHQkDN0zYY2e9IzUJYQTQ1cIOx7t9DbfYvGvNzDJcT4bTYemcGG8SZKA2rB3FPTsyE0XEyyweXGu0Z8xPEKeR7IvtHmuFm3u21YHhm1CVkg9oJjVNuqdUtzrhpZ6WeG22TgCPO",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
