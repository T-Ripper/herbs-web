const products = [
  {
    name: "Alle",
    image: "/assets/Ale.jpeg",

    description: `This strictly for men . 
    THis gives man power. 
    If you want to have a good experience 
    take it with Opayin and Jedi-Jedi.This mixture should be used with (Opayin and JEDI-JEDI 
      for effective result ) For errection and for men only. 
    `,

    category: "Men",
    price: 20,
    countInStock: 13,
    rating: 2,
    numReviews: 3,
  },
  {
    name: "Hypertension",
    image: "/assets/Hyperten.jpeg",

    description: `This helps regulate BP and souind sleep.
    Half teaspoon twice daily , when the blood pressure 
    is regulated you will reduce it to once daily
    `,

    category: "All",
    price: 20,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: "Fibroid",
    image: "/assets/Fibroid.jpeg",

    description: ` This is strictly for women with fibroid.
     Half teaspoon once daily, drink with mixture of 
    lemon Juice and gin in a cup  
    How to use : Get 2 1/2 litre of lemon juice a nd a bottle of Gin .
     Mix in a 5 litre keg . When you want to drink the fibroid herbs 
     you will take half cup of the mixture and half teaspoon 
     of the fibroid herbs and drink every three days. `,

    category: "Female",
    price: 20,
    countInStock: 3,
    rating: 1.5,
    numReviews: 3,
  },
  {
    name: "Opayin",
    image: "/assets/Opayin.jpeg",

    description: `This works with Jedi-Jedi and also help
    the backbone. Mix it with JEDI JEDI together with water , 
    take each half tea spoon of the two herbs then take it 
    with water . It works for back pain, pile and joint pains . 
    Works for both Men and Women   `,

    category: "Both",
    price: 20,
    countInStock: 3,
    rating: 5,
    numReviews: 3,
  },
  {
    name: "Pile",
    image: "/assets/Pile.jpeg",

    description: `If you have blood coming out of your anus. This will help
     Mix half teaspoon of Awoka powder with hot water after ten minutes. Drink it , it works rheumatism and Arthritis.  
      You can also use it by taking the mixture and
       rub it on the affected part of your body . 
       Works for same thing (Awoka as Cream)  `,

    category: "Both",
    price: 20,
    countInStock: 3,
    rating: 4,
    numReviews: 3,
  },
  {
    name: "Ulcer",
    image: "/assets/Ulcere.jpeg",

    description: `This works for anyone with ulcer .
    Half teaspoon morning and night.
    `,

    category: "All",
    price: 20,
    countInStock: 3,
    rating: 1,
    numReviews: 3,
  },
  {
    name: "Olugbogi",
    image: "/assets/Olugbogi.jpeg",

    description: `This help regulate sleep and BP.  Take one spoon of powdered Olugbobi . 
    Mis with hot water for after 10 minute then after that it is 
    ready to drink . Drink only @ night giving you sound sleep 
    and makes your body strong. It works for BP and also for sugar too. `,

    category: "All",
    price: 20,
    countInStock: 3,
    rating: 4.5,
    numReviews: 3,
  },
  {
    name: "Abere",
    image: "/assets/Abere.jpeg",

    description: `2. If you are a chronic diabetes patient then 
    this is for you. When you want to use this herb (Abere) 
    you can take the powder with only water if the level of the 
    sugar is very high .  When your sugar level is starting to reduce 
    to the normal range , you should have soak the herb (Abere) with 
    coconut water for like three  weeks. You will separate the one with 
    coconut water and start using it when you notice your sugar level 
    is low then take another set of the powder herb (Abere) and soak it 
    with gin and start using it . This is also works for people with 
    prostrate cancer for men . 
   Note : If you are given drugs by the doctor pls don/'t stop using 
   it until you are sure the drug suits you well !  `,

    category: "All",
    price: 20,
    countInStock: 3,
    rating: 4.5,
    numReviews: 3,
  },
  {
    name: "Jedi",
    image: "/assets/Jedi.jpeg",

    description: ` This works for backpain and helps you go to the toilet
       propely.  Mix this with Opayin together with water , 
    take each half tea spoon of the two herbs then take it with water .
     It works for back pain, pile and joint pains .
      Works for both Men and Women   `,

    category: "All",
    price: 20,
    countInStock: 3,
    rating: 4.5,
    numReviews: 3,
  },
  {
    name: "Cream-Awoka",
    image: "/assets/Cream-Awoka.jpeg",

    description: ` This works for Rheumatoid .You can use this by taking 
    the mixture and rub it on the affected part of 
    your body . Works for same thing 
    (Awoka as Cream)
    `,

    category: "All",
    price: 20,
    countInStock: 3,
    rating: 4.5,
    numReviews: 3,
  },
  {
    name: "Aworoso",
    image: "/assets/Aworoso.jpeg",

    description: `This is mainly for cholestrol.
     You should use this before 
    using any of the herbs and should be used 
    alone . You should use your index finger to 
    get the spit bon your tongue, use the same 
    index finger to touch the herb ( Aworoso) 
    and lick the Aworoso and swallow with water . 
    Also if you requested for the seed and was 
    given it is important to use with at least 7 
    groundnut. 
		It works for the body cholesterol and flush 
    the body system . You should use once in a 
    month.
    `,

    category: "All",
    price: 20,
    countInStock: 3,
    rating: 4.5,
    numReviews: 3,
  },
  {
    name: "Iko",
    image: "/assets/Iko.jpeg",

    description: ` This works for chronic cough .  Look for a clean bowl pour 
    this mixture, add a little bit of palm oil 
    inside the mixture , stair it all together 
    when ever you need to take it
    `,

    category: "All",
    price: 20,
    countInStock: 3,
    rating: 4.5,
    numReviews: 3,
  },
  {
    name: "Iba",
    image: "/assets/Iba.jpeg",

    description: `This works for malaria `,

    category: "All",
    price: 20,
    countInStock: 3,
    rating: 4.5,
    numReviews: 3,
  },
  {
    name: "Infection",
    image: "/assets/Infection.jpeg",

    description: ` This works on infection in the body (strictly for female)
    Half teaspoon, drink with Pan every 3 days `,

    category: "Female",
    price: 20,
    countInStock: 3,
    rating: 4.5,
    numReviews: 3,
  },
  {
    name: "Full Package",
    image: "/assets/Seconda.jpeg",
    description: `You save 20% by getting this full package whicb c
              consist of abere(for diabeties), hypertension(for blood-pressure)
              ,olugbogi(regulate sleep), narun(cleans dirty in the blood), opa-eyin
              and jedi-jedi(for back pain and sugar), ale(for men- man power) 
              awoka(for Rheumatoid) awoka-cream. `,

    category: "Female",
    price: 190,
    countInStock: 10,
    rating: 5,
    numReviews: 4,
  },
];

export default products;
