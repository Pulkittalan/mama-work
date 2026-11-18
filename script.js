(() => {
  "use strict";
  const directories = {"Dhaulana": ["Aajampur", "Bajhera Khurd", "Basatpur", "Beegheypur", "Bhajeda Kalan", "Bhava", "Bhovapur", "Bhudia", "Chhajarsi", "Dahirpur Rajjakpur", "Dahpa Kandauli", "Daulatpur Dhikari", "Dehra", "Dhaulana", "Doma Tikri", "Duhri", "Eklaidi", "Galand", "Hasanpur Lodha", "Hawal", "Himmat Nagar", "Hindalpur", "Jadopur", "Kakrana", "Kamaruddin Nagar", "Kandola", "Kapoorpur", "Karanpur Jatt", "Karimpur Bhaipur", "Khairpur Khairabad", "Laalpur", "Lakhan", "Madapur Mustafabad", "Meerapur", "Nagla Gajju", "Nagla Kashi", "Naglaudairampur", "Nandpur", "Naraina", "Narainpur Vaska", "Nidhauli", "Parpa", "Partapur", "Pilkhua Dehat", "Pipla Bandpur", "Piplada", "Samana", "Sapanwat", "Shahpur Fagauta", "Shaulana", "Shekhpur Khichara", "Sikheda", "Siwaya", "Sukhdeopur", "Tisaudi Khera"], "Hapur": ["Abdullapur Basantpur Goyna", "Abdullapur Modi", "Achhaija", "Ahmadpur Naya Gaon", "Akdauli", "Alampur", "Allipur Mugalpur", "Amipur Nagola", "Anwarpur", "Asodha", "Ayadnagar (North)", "Ayadnagar (South)", "Babugarh Gram", "Bachhlauta", "Badnoli", "Bagadpur", "Bankhanda", "Baroda Hinduvan", "Baroda Sinhani", "Bhadangpur", "Bhameda", "Bhatail", "Bhatiana Mir Pur", "Bhikanpur", "Chhajjupur", "Chhapkauli", "Chitauli", "Dadayara", "Dadri-Jogipura", "Dahana", "Dastoi", "Dayanatpur", "Dhanaura", "Doymi", "Fatehpur", "Gaundi", "Ghunghrala", "Girdharpur Tumrail", "Hafizpur Ubarpur", "Hajipur", "Harsinghpur", "Hasanpur", "Hirdaypur", "Hoshiyarpur Garhi", "Imtori", "Jogipura", "Kamalpur", "Kanvi", "Kastala Kasmabad", "Kathikhera", "Khadkhadi", "Kurana Meerpur", "Lakhrada", "Lalpur", "Mahmoodpur", "Malakpur", "Matnavali", "Meerpur Kalan", "Meerpur Majra", "Moorpur", "Murad Nagar", "Murshadpur", "Mushrafpur Jhanda", "Nali Husainpur", "Nan", "Nawada", "Nizampur", "Noorpur", "Patna Muradpur", "Peernagar Sudna", "Pootha Husainpur", "Raghunathpur", "Rampur", "Rasoolpur Bahlolpur", "Sabli", "Sadikpur", "Salai", "Salepur Kotla", "Sami Himayupur", "Sarava Mirzapur", "Shahbuddinpur Nagar", "Shahpur Jatt", "Shamhiuddinpur", "Shekhpur", "Shyam Nagar", "Sikandarpur Kakaudi", "Simrauli", "Sirodhan", "Sultanpur", "Tatarpur", "Tiyala", "Upeda", "Wajheelpur"], "Simbhawali": ["Ahsaanpur Jamaalpur", "Akbarpur Buklana", "Arifpur", "Asra", "Atuta", "Aurangabad", "Bangoli", "Barhanpur Vadali", "Beersinghpur", "Bhagwanpur", "Bharna", "Bhowapur", "Bhowapur Mastan Nagar", "Birampur", "Buxer", "Dariyapur", "Datiyana", "Dhanawali Urf Atta", "Dhanpura", "Faridpur Gusai", "Faridpur Simbhavali", "Fatehpur Matnaura", "Fuldehra", "Gandu Nagla", "Gohra Alamgirpur", "Goshmahiuddinpur Chhatnaura", "Harnathpur Kota", "Haroda", "Havaspur Bigas", "Himmatpur", "Jakhera Rahmatpur", "Kaniya Kalyanpur", "Khagoi", "Kheda Dariyapur", "Khurana Jahangirabad", "Madhapur Mozampur", "Mohammadpur Khudalia", "Mubarak Pur", "Muhammadpur Azampur", "Mukteshwara", "Muradpur", "Muradpur Nizampur", "Muzaffara Bagadpur", "Nagla Bar", "Nawada Kalan", "Neknampur Fuldi", "Niyazpur-Khayya", "Peer Nagar", "Rajapur", "Rajheda", "Rajheti", "Rajpur, Mazra Rajpur Ki Madhaiya", "Ratupura", "Saina", "Salarprpur", "Saloni", "Sarawani", "Saroorpur", "Sharifpur", "Shyampur Jatt", "Sikhauda Muradabad", "Singanpur", "Tigri", "Todarpur", "Vait"], "Garh Mukteshwar": ["Akkhapur Urf Akhtyarpur", "Alamgirpur", "Alamnagar Nawada", "Alampur Bhagwantpur", "Allabuxpur", "Allipur Thera", "Anuppur Debai", "Athsaini", "Badarkha", "Bagadpur", "Bahadur Garh", "Bahapur Theda", "Bhadsyana", "Bhagwati Urf Lisdi", "Bhaina Sadarpur", "Bihooni", "Chandener", "Chittauda Mahiuddinpur", "Dahra", "Dautai", "Deoli", "Dhana", "Dholpur", "Fattapur Lisdi", "Gadawali", "Haiderpur", "Hasupura", "Inayatpur", "Jhadina", "Kalyanpur", "Karimpur", "Kataura Zafarabad", "Kati Urf Shankara Teela", "Khilwai", "Ladpura", "Lahadara", "Lathira", "Lodipur Chhapka", "Lodipur Soban", "Luhari", "Manak Chauk", "Mohammadpur Rustampur", "Muradpur Janupura", "Muradpur Pavati", "Nangli Kanaur", "Nawada Khurd", "Neknampur Nanai", "Palwada", "Paswada", "Paupai Hiranpura", "Pooth Shankarateela", "Raharwa Kirawali", "Rampur Nyamatpur", "Rasoolabad Nanpur", "Sadullapur Lodi", "Salarpur", "Sehal", "Shahpur Chaudhri", "Sherpur Alapur", "Sikandarpur"]};
  const imageByBlock = {
    "Dhaulana":"assets/dhaulana.png",
    "Hapur":"assets/hapur.png",
    "Simbhawali":"assets/simbhawali.png",
    "Garh Mukteshwar":"assets/garh-mukteshwar.png"
  };
  const overlay = document.getElementById("overlay");
  const title = document.getElementById("block-title");
  const count = document.getElementById("block-count");
  const image = document.getElementById("block-image");
  const search = document.getElementById("search");
  const clearSearch = document.getElementById("clear-search");
  const results = document.getElementById("results");
  const resultsCount = document.getElementById("results-count");
  const noResults = document.getElementById("no-results");
  const closeButton = document.getElementById("close");
  const dismiss = document.getElementById("overlay-dismiss");
  let selectedBlock = null;
  let lastFocused = null;

  function escapeHTML(text) {
    return text.replace(/[&<>"']/g, char => ({
      "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
    })[char]);
  }

  function renderResults() {
    if (!selectedBlock) return;
    const all = directories[selectedBlock];
    const query = search.value.trim().toLocaleLowerCase();
    const filtered = all.map((name, index) => ({name, index}))
      .filter(item => item.name.toLocaleLowerCase().includes(query));
    results.innerHTML = filtered.map(item =>
      `<div class="result-row" role="listitem"><span class="result-number">${String(item.index + 1).padStart(2,"0")}</span><span>${escapeHTML(item.name)}</span></div>`
    ).join("");
    resultsCount.textContent = `${filtered.length} of ${all.length} results`;
    noResults.hidden = filtered.length !== 0;
  }

  function openDirectory(block) {
    if (!Object.prototype.hasOwnProperty.call(directories, block)) return;
    selectedBlock = block;
    hideHoverCutouts();
    lastFocused = document.activeElement;
    title.textContent = block;
    count.textContent = `${directories[block].length} Gram Panchayats`;
    image.src = imageByBlock[block];
    image.alt = `${block} block map cutout`;
    image.style.animation = "none";
    void image.offsetWidth;
    image.style.animation = "";
    search.value = "";
    renderResults();
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    window.setTimeout(() => search.focus(), 180);
  }

  function closeDirectory() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  const desktopHover = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 701px)").matches;
  const hoverCutouts = [...document.querySelectorAll(".hover-popout")];

  function showHoverCutout(block) {
    hoverCutouts.forEach(cutout => {
      cutout.classList.toggle("is-visible", cutout.dataset.region === block);
    });
  }
  function hideHoverCutouts() {
    hoverCutouts.forEach(cutout => cutout.classList.remove("is-visible"));
  }

  document.querySelectorAll(".hit-area").forEach(area => {
    const block = area.dataset.region;

    // Large screens only: gently lift the exact matching cutout while the mouse is over a block.
    if (desktopHover) {
      area.addEventListener("pointerenter", event => {
        if (event.pointerType === "mouse" && !overlay.classList.contains("open")) showHoverCutout(block);
      });
      area.addEventListener("pointerleave", event => {
        if (event.pointerType === "mouse") hideHoverCutouts();
      });
    }

    area.addEventListener("click", event => {
      event.preventDefault();
      openDirectory(block);
    });
    area.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDirectory(block);
      }
    });
  });

  search.addEventListener("input", renderResults);
  clearSearch.addEventListener("click", () => {
    search.value = "";
    renderResults();
    search.focus();
  });
  closeButton.addEventListener("click", closeDirectory);
  dismiss.addEventListener("click", closeDirectory);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && overlay.classList.contains("open")) closeDirectory();
  });
})();
