const penDetails = {
  1: {
    img: "https://i.ibb.co/CKmHQ9X3/luxpen1.jpg",
    title: "Luxury Heritage Gold Pen",
    desc: "This fountain pen offers timeless elegance with a gold-plated finish and smooth ink flow. Designed for collectors and those who admire craftsmanship.",
    material: "Gold and Resin",
    price: "$475"
  },
  2: {
    img: "https://i.ibb.co/yFb5ByKb/luxpen2.jpg",
    title: "Midnight Aluminum Pen",
    desc: "Sleek and modern, this aluminum-bodied pen glides effortlessly on paper, making it a favorite among professionals.",
    material: "Anodized Aluminum",
    price: "$590"
  },
  3: {
    img: "https://i.ibb.co/B5r66svY/luxpen3.jpg",
    title: "Woodgrain Collector's Pen",
    desc: "Crafted from premium wood and polished to perfection. A warm writing companion for journaling enthusiasts.",
    material: "Oak Wood and Chrome",
    price: "$430"
  },
  4: {
    img: "https://i.ibb.co/YT3QtXyG/luxpen4.jpg",
    title: "Executive Steel Signature Pen",
    desc: "This steel fountain pen delivers a sophisticated style with a smooth, weighted feel ideal for long writing sessions.",
    material: "Brushed Steel",
    price: "$525"
  },
  5: {
    img: "https://i.ibb.co/yBqXW9jB/luxpen5.jpg",
    title: "Royal Silver Engraved Pen",
    desc: "Etched in pure silver, this pen embodies luxury with a hint of vintage charm and precise ink delivery.",
    material: "Sterling Silver",
    price: "$610"
  },
  6: {
    img: "https://i.ibb.co/GvBjXXL3/luxpen6.jpg",
    title: "Classic Bronze Writer",
    desc: "Inspired by retro styles, this pen offers a reliable and rich writing experience with bronze accents.",
    material: "Bronze and Brass",
    price: "$460"
  }
};

function showPenDetail(id) {
  const pen = penDetails[id];
  const container = document.getElementById('pen-detail-container');
  container.innerHTML = `
    <img src="${pen.img}" alt="${pen.title}">
    <div class="pen-info">
      <h2>${pen.title}</h2>
      <p>${pen.desc}</p>
      <p><strong>Material:</strong> ${pen.material}</p>
      <p class="price">Price: ${pen.price}</p>
    </div>
  `;
  container.scrollIntoView({ behavior: "smooth" });
  container.style.display = 'block';
}
