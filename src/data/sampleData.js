export const categories = [
  "Insecticides",
  "Herbicides",
  "Fungicides",
  "Rodenticides",
  "Bio Pesticides",
];

export const siteImages = {
  cropSolutions:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=88",
  cropCloseup:
    "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=88",
  pestProblems:
    "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=88",
  innovation:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=88",
  quality:
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=88",
  sustainability:
    "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?auto=format&fit=crop&w=1200&q=88",
  contact:
    "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=88",
  safety:
    "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=1200&q=88",
};

export const samplePesticides = [
  {
    id: "p1",
    name: "CropShield Max",
    brand: "AgriGuard",
    category: "Insecticides",
    image:
      "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&w=900&q=85",
    description:
      "CropShield Max is a broad-spectrum insecticide formulated for dependable control of common sucking and chewing pests. It helps protect crop foliage during critical growth stages and is suitable for integrated pest-management programs when used according to the product label.",
    activeIngredient: "Imidacloprid",
    recommendedCrops: "Cotton, Rice, Vegetables",
    targetPest: "Aphids, Whiteflies, Leafhoppers",
    usageInstructions:
      "Dilute according to label directions and spray uniformly during calm weather.",
    dosage: "2 ml per litre of water",
    safetyPrecautions:
      "Wear gloves, mask and protective clothing. Keep away from children.",
    warningLevel: "High",
    manufacturingDate: "2026-01-15",
    expiryDate: "2028-01-14",
  },
  {
    id: "p2",
    name: "WeedClear Pro",
    brand: "GreenField",
    category: "Herbicides",
    image:
      "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=900&q=85",
    description:
      "WeedClear Pro is a selective weed-management solution that helps farmers reduce competition from annual and perennial weeds. Its targeted action supports cleaner fields and healthier crop establishment while helping growers maintain a consistent spray program.",
    activeIngredient: "Glyphosate",
    recommendedCrops: "Non-crop areas, Plantations",
    targetPest: "Annual and perennial weeds",
    usageInstructions: "Apply only to target weeds and avoid spray drift.",
    dosage: "5 ml per litre of water",
    safetyPrecautions: "Use eye protection and avoid inhalation.",
    warningLevel: "Medium",
    manufacturingDate: "2026-02-01",
    expiryDate: "2028-01-31",
  },
  {
    id: "p3",
    name: "FungiGuard",
    brand: "BioHarvest",
    category: "Fungicides",
    image:
      "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=900&q=85",
    description:
      "FungiGuard is a protective fungicide for managing common fungal diseases before they spread through the crop. Regular, correctly timed applications can help protect leaves and fruit and support healthier harvests when combined with good field hygiene.",
    activeIngredient: "Mancozeb",
    recommendedCrops: "Tomato, Grapes, Potato",
    targetPest: "Blight, Mildew, Leaf Spot",
    usageInstructions: "Begin preventive treatment before disease spreads.",
    dosage: "2.5 g per litre of water",
    safetyPrecautions: "Avoid contact with skin and wash hands after use.",
    warningLevel: "Medium",
    manufacturingDate: "2026-03-10",
    expiryDate: "2028-03-09",
  },
  {
    id: "p4",
    name: "BioNeem Protect",
    brand: "NatureCrop",
    category: "Bio Pesticides",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
    description:
      "BioNeem Protect is a plant-based pest-management solution made with neem-derived active ingredients. It is designed for growers who want a lower-residue option for routine crop care and works best when applied early, evenly, and as part of an integrated pest-management plan.",
    activeIngredient: "Azadirachtin",
    recommendedCrops: "Vegetables, Fruits, Flowers",
    targetPest: "Aphids, Mites, Caterpillars",
    usageInstructions: "Spray evenly in early morning or late evening.",
    dosage: "3 ml per litre of water",
    safetyPrecautions:
      "Store in a cool, dry place and follow label directions.",
    warningLevel: "Low",
    manufacturingDate: "2026-04-05",
    expiryDate: "2028-04-04",
  },
];

export const additionalPesticides = [
  {
    id: "p5",
    name: "LeafLock 50",
    brand: "FarmNova",
    category: "Insecticides",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=900&q=85",
    description:
      "LeafLock 50 provides fast-acting protection against chewing and sucking insects that damage leaves, stems, and developing fruit. Its concentrated formula is designed for uniform coverage and should be applied only at the recommended crop stage and label rate.",
    activeIngredient: "Lambda-cyhalothrin",
    recommendedCrops: "Cotton, Chilli, Soybean",
    targetPest: "Bollworms, Thrips",
    usageInstructions: "Apply evenly at the first sign of infestation.",
    dosage: "1 ml per litre of water",
    safetyPrecautions: "Wear gloves and avoid spraying near water bodies.",
    warningLevel: "High",
    manufacturingDate: "2026-02-15",
    expiryDate: "2028-02-14",
  },
  {
    id: "p6",
    name: "RootGuard Bio",
    brand: "EcoGrow",
    category: "Bio Pesticides",
    price: 549,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85",
    description:
      "RootGuard Bio is a biological soil treatment that supports a healthier root zone by helping manage soil-borne fungal pressure. It can be applied with compost or as a soil drench and is particularly useful in preventive crop-care programs.",
    activeIngredient: "Trichoderma viride",
    recommendedCrops: "Vegetables, Cereals",
    targetPest: "Root rot, Soil fungi",
    usageInstructions: "Mix with compost or apply as a soil drench.",
    dosage: "5 g per litre of water",
    safetyPrecautions: "Store away from direct sunlight.",
    warningLevel: "Low",
    manufacturingDate: "2026-01-20",
    expiryDate: "2027-07-19",
  },
  {
    id: "p7",
    name: "GrassAway Select",
    brand: "FieldWorks",
    category: "Herbicides",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85",
    description:
      "GrassAway Select helps control troublesome grassy weeds while allowing recommended crops to continue growing. The product is intended for directed field use, and careful timing, calm weather, and correct water volume help improve coverage and reduce drift.",
    activeIngredient: "Quizalofop-p-ethyl",
    recommendedCrops: "Soybean, Groundnut",
    targetPest: "Grassy weeds",
    usageInstructions: "Spray on actively growing weeds in calm weather.",
    dosage: "2 ml per litre of water",
    safetyPrecautions: "Keep people and animals away until dry.",
    warningLevel: "Medium",
    manufacturingDate: "2026-03-01",
    expiryDate: "2028-02-28",
  },
  {
    id: "p8",
    name: "MildewStop",
    brand: "HarvestCare",
    category: "Fungicides",
    price: 629,
    image:
      "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=900&q=85",
    description:
      "MildewStop offers preventive and curative support against powdery mildew on fruit and vegetable crops. It helps protect plant surfaces during periods of disease risk and should be rotated with compatible products to support a responsible resistance-management strategy.",
    activeIngredient: "Sulphur 80%",
    recommendedCrops: "Grapes, Cucurbits, Mango",
    targetPest: "Powdery mildew",
    usageInstructions: "Apply at recommended intervals during disease risk.",
    dosage: "2 g per litre of water",
    safetyPrecautions: "Do not apply during extreme heat.",
    warningLevel: "Medium",
    manufacturingDate: "2026-02-10",
    expiryDate: "2028-02-09",
  },
  {
    id: "p9",
    name: "RatSafe Grain Bait",
    brand: "AgriShield",
    category: "Rodenticides",
    price: 459,
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=85",
    description:
      "RatSafe Grain Bait is a ready-to-use rodent-control product for secure storage areas and farm premises. Place it only in protected bait stations and inspect stations regularly so stored harvests remain safer without exposing children, pets, livestock, or non-target wildlife.",
    activeIngredient: "Brodifacoum",
    recommendedCrops: "Stored grain",
    targetPest: "Rats and mice",
    usageInstructions: "Place bait stations away from children and pets.",
    dosage: "Follow label bait station guidance",
    safetyPrecautions: "Use only in secure bait stations.",
    warningLevel: "High",
    manufacturingDate: "2026-01-12",
    expiryDate: "2028-01-11",
  },
  {
    id: "p10",
    name: "FruitFly Trap Kit",
    brand: "NatureCrop",
    category: "Bio Pesticides",
    price: 389,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=900&q=85",
    description:
      "FruitFly Trap Kit is a low-residue monitoring and control solution for fruit-growing areas. The lure helps growers detect activity early and reduce adult fruit-fly pressure when traps are distributed evenly and combined with orchard sanitation and timely harvesting.",
    activeIngredient: "Food lure",
    recommendedCrops: "Fruit orchards",
    targetPest: "Fruit flies",
    usageInstructions: "Hang traps evenly throughout the crop canopy.",
    dosage: "4 traps per acre",
    safetyPrecautions: "Dispose of used lures responsibly.",
    warningLevel: "Low",
    manufacturingDate: "2026-04-01",
    expiryDate: "2027-03-31",
  },
  {
    id: "p11",
    name: "TomatoShield Copper",
    brand: "OrchardPro",
    category: "Fungicides",
    price: 575,
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=85",
    description:
      "TomatoShield Copper is a copper-based protectant for vegetable growers managing bacterial and fungal pressure. It forms a protective barrier on plant surfaces and is best used preventively with careful attention to crop stage, weather, and label directions.",
    activeIngredient: "Copper oxychloride",
    recommendedCrops: "Tomato, Chilli, Citrus",
    targetPest: "Bacterial spot, Early blight",
    usageInstructions:
      "Apply as a uniform protective spray before disease conditions become severe.",
    dosage: "2.5 g per litre of water",
    safetyPrecautions:
      "Wear protective clothing and avoid application during strong heat or wind.",
    warningLevel: "Medium",
    manufacturingDate: "2026-03-18",
    expiryDate: "2028-03-17",
  },
  {
    id: "p12",
    name: "AphidGuard Botanical",
    brand: "GreenRoots",
    category: "Bio Pesticides",
    price: 475,
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=85",
    description:
      "AphidGuard Botanical is a botanical crop-protection spray designed to help manage aphids and other soft-bodied insects. It supports regular monitoring programs and provides growers with a plant-based option for vegetable, fruit, and ornamental crops.",
    activeIngredient: "Karanja extract",
    recommendedCrops: "Vegetables, Fruits, Ornamentals",
    targetPest: "Aphids, Whiteflies, Mealybugs",
    usageInstructions:
      "Spray both sides of leaves during early morning or late evening and repeat as directed.",
    dosage: "4 ml per litre of water",
    safetyPrecautions:
      "Test on a small crop area first and keep away from aquatic environments.",
    warningLevel: "Low",
    manufacturingDate: "2026-04-12",
    expiryDate: "2027-10-11",
  },
  {
    id: "p13",
    name: "RiceCare Granules",
    brand: "FieldWorks",
    category: "Insecticides",
    price: 745,
    image:
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=900&q=85",
    description:
      "RiceCare Granules are formulated for targeted protection of rice fields during vulnerable crop stages. The granule format supports measured application around the crop root zone and helps farmers manage pests while maintaining an organized field-care schedule.",
    activeIngredient: "Cartap hydrochloride",
    recommendedCrops: "Rice, Paddy",
    targetPest: "Stem borer, Leaf folder",
    usageInstructions:
      "Apply evenly to a shallow-water field according to the approved crop label.",
    dosage: "10 kg per hectare",
    safetyPrecautions:
      "Use gloves and do not enter treated fields before the label re-entry interval.",
    warningLevel: "High",
    manufacturingDate: "2026-02-22",
    expiryDate: "2028-02-21",
  },
  {
    id: "p14",
    name: "VineVigor Herbicide",
    brand: "AgriGuard",
    category: "Herbicides",
    price: 685,
    image:
      "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=900&q=85",
    description:
      "VineVigor Herbicide helps vineyards and plantation growers manage unwanted vegetation around crop rows. Its use can reduce weed competition for water and nutrients when applied as a carefully directed spray away from crop foliage.",
    activeIngredient: "Paraquat dichloride",
    recommendedCrops: "Vineyards, Orchards, Plantations",
    targetPest: "Broadleaf and grassy weeds",
    usageInstructions:
      "Use a shielded, directed spray and avoid contact with green crop tissue.",
    dosage: "3 ml per litre of water",
    safetyPrecautions:
      "High caution product: use full protective equipment and prevent spray drift.",
    warningLevel: "High",
    manufacturingDate: "2026-01-30",
    expiryDate: "2028-01-29",
  },
  {
    id: "p15",
    name: "StorageSafe Protect",
    brand: "HarvestCare",
    category: "Rodenticides",
    price: 425,
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=85",
    description:
      "StorageSafe Protect helps safeguard grain stores and farm buildings from recurring rodent activity. Its controlled-use format is intended for secure placements and should be combined with sanitation, sealed storage, and regular inspection.",
    activeIngredient: "Zinc phosphide",
    recommendedCrops: "Warehouses, Grain stores",
    targetPest: "Rats, Mice",
    usageInstructions:
      "Place measured bait inside locked stations in areas with visible rodent activity.",
    dosage: "Follow the product label and bait-station instructions",
    safetyPrecautions:
      "Keep locked away from food, children, pets, livestock, and non-target animals.",
    warningLevel: "High",
    manufacturingDate: "2026-02-08",
    expiryDate: "2028-02-07",
  },
  {
    id: "p16",
    name: "CaterpillarCheck",
    brand: "NatureCrop",
    category: "Bio Pesticides",
    price: 515,
    image:
      "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=900&q=85",
    description:
      "CaterpillarCheck is a biological crop-protection product intended for early management of caterpillar larvae. It works best when scouting identifies young larvae and applications are timed before severe leaf and fruit damage occurs.",
    activeIngredient: "Bacillus thuringiensis",
    recommendedCrops: "Cabbage, Cotton, Maize",
    targetPest: "Caterpillars, Armyworms",
    usageInstructions:
      "Apply to thoroughly cover foliage when young larvae are first observed.",
    dosage: "2 g per litre of water",
    safetyPrecautions:
      "Store in a cool location and follow all label instructions for mixing and use.",
    warningLevel: "Low",
    manufacturingDate: "2026-04-18",
    expiryDate: "2027-10-17",
  },
];
