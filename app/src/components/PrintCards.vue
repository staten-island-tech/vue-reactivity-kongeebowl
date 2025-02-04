<template>
  <div class="container flex flex-wrap items-center justify-around m-auto">
    <DrugCards v-for="drug in legalDrugs" :key="drug.name" :drug="drug" />
  </div>
</template>

<script setup>
import DrugCards from './DrugCards.vue'

const legalDrugs = [
  {
    name: 'Aspirin',
    price: 5.99,
    function: 'Pain relief, anti-inflammatory',
    image:
      'https://s.france24.com/media/display/a71a2ca4-0e74-11e9-8056-005056a964fe/w:1280/p:1x1/20080307-aspirine-m_0.jpg',
  },
  {
    name: 'Ibuprofen',
    price: 7.49,
    function: 'Pain relief, anti-inflammatory',
    image: 'https://assets.fishersci.com/TFS-Assets/CCG/product-images/F309626~p.eps-650.jpg',
  },
  {
    name: 'Paracetamol',
    price: 3.99,
    function: 'Pain relief, fever reduction',
    image:
      'https://s.rfi.fr/media/display/e1d1673e-9649-11ed-a651-005056a90321/w:1280/p:1x1/000_336K46B.jpg',
  },
  {
    name: 'Loratadine',
    price: 8.49,
    function: 'Antihistamine, allergy relief',
    image: 'https://d3ckuu7lxvlwp2.cloudfront.net/products/323164664629f7502a64a0product.webp',
  },
  {
    name: 'Nicotine (patch)',
    price: 10.99,
    function: 'Smoking cessation aid',
    image: 'https://pics.walgreens.com/prodimg/629344/450.jpg',
  },
  {
    name: 'Diphenhydramine',
    price: 4.99,
    function: 'Antihistamine, sleep aid',
    image:
      'https://s.turbifycdn.com/aah/yhst-12533177228474/diphenhydramine-hcl-injection-50mg-ml-25x1ml-ndc-00641-0376-25-61.gif',
  },
  {
    name: 'Omeprazole',
    price: 9.99,
    function: 'Acid reflux, heartburn relief',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2021/8/FF/FR/KQ/59991453/omeprazole-injection-40-mg-250x250.jpg',
  },
  {
    name: 'Guaifenesin',
    price: 6.49,
    function: 'Expectorant, cough relief',
    image: 'https://m.media-amazon.com/images/I/61ENhNrlmfL.jpg',
  },
  {
    name: 'Hydrocodone',
    price: 12.99,
    function: 'Cough suppressant, pain relief',
    image:
      'https://s.france24.com/media/display/ebf8c7d0-83b6-11ec-ba33-005056bf30b7/w:1280/p:1x1/2022-02-01T170143Z_327640610_RC25BS9UEAQE_RTRMADP_3_USA-OPIOIDS-LITIGATION.jpg',
  },
  {
    name: 'Fluconazole',
    price: 15.99,
    function: 'Antifungal, treats yeast infections',
    image: 'https://www.pyxuspharmaceuticals.com/wp-content/uploads/2022/09/FLUCONAZOLE.png',
  },
  {
    name: 'Dextromethorphan',
    price: 4.29,
    function: 'Cough suppressant',
    image:
      'https://s.turbifycdn.com/aah/yhst-12533177228474/dextromethorphan-polistirex-extended-release-oral-suspension-3-oz-brand-name-delsym-30mg-5ml-perrigo-45802043321-52.gif',
  },
  {
    name: 'Ranitidine',
    price: 7.99,
    function: 'Antacid, reduces stomach acid',
    image:
      'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202412/no-plans-to-ban-ranitidine-in-the-country-190925408-1x1.jpg?VersionId=0KZOg3Z1k7o56fvQ9lKnzKmJyVR8e9Q6',
  },
  {
    name: 'Loperamide',
    price: 3.49,
    function: 'Anti-diarrheal',
    image: 'https://www.doctorfox.co.uk/imgs-products/sd/1x1/loperamide-capsules-2mg-capsules.jpg',
  },
  {
    name: 'Melatonin',
    price: 8.99,
    function: 'Sleep aid, regulates sleep cycle',
    image:
      'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82NDExNFwvNjQxMTQtTWVsYXRvbmluLTEwbWctMTIwLVRhYmxldHMtU2xlZXAtU3VwcGxlbWVudC1Ob24tR01PLUdsdXRlbi1GcmVlLUJ5LVBpcGluZy1Sb2NrXzRmYTZkZDRiLTY5OTYtNDY5MC1iYjI1LTYwYWZiYmU1N2FjMS01cXY0aDMud2VicCIsImVkaXRzIjpbXX0=',
  },
  {
    name: 'Magnesium',
    price: 6.99,
    function: 'Muscle relaxation, prevents cramps',
    image:
      'https://media.icdn.hu/product/GalleryMod/2022-10/844878/resp/2019795_1x1-vitaday-magnezium-250-mg-filmtabletta-100-db.webp',
  },
  {
    name: 'Echinacea',
    price: 9.49,
    function: 'Boosts immune system',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81XLa-xxsAL._AC_UL600_SR600,600_.jpg',
  },
  {
    name: 'Ozempic',
    price: 1139.99,
    function: 'maks you less big',
    image:
      'https://ipro.blob.core.windows.net/images/_ozempic-single-dose-1mg-insulin-1x1-20221221042022.jpg',
  },
  {
    name: 'Ciprofloxacin',
    price: 13.99,
    function: 'Antibiotic, treats bacterial infections',
    image: 'https://facesconsent.com/resources/products-images/13966/2039780798-aep021_1.jpg',
  },
  {
    name: 'Atorvastatin',
    price: 18.99,
    function: 'Cholesterol-lowering, heart disease prevention',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2024/1/380841738/AM/VA/KC/18677272/atorvastatin-10-mg-tablets-500x500.jpg',
  },
  {
    name: 'Levothyroxine',
    price: 10.49,
    function: 'Thyroid hormone replacement',
    image:
      'https://s.rfi.fr/media/display/474f8978-0d37-11ea-946b-005056a9aa4d/w:1280/p:1x1/000_sg1ky.jpg',
  },
]
</script>

<style scoped></style>
