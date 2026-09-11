(() => {
  'use strict';

  const FIXED_LOAD_G = 2147;
  const CURRENT_BAG_G = 490;
  const CURRENT_TOTAL_G = FIXED_LOAD_G + CURRENT_BAG_G;

  const models = [
    {
      rank: 1,
      id: 'c71-16003',
      baseline: true,
      brand: 'OPAQUE.CLIP',
      title: '9ポケット トートバッグ',
      code: 'C71-16003',
      color: 'Black（使用中） / Beige',
      weight: 490,
      url: 'https://wear.jp/item/66671652/',
      images: [
        {
          label: 'ベージュ単品',
          alt: 'OPAQUE.CLIP C71-16003 ベージュ 単品写真',
          sources: ['https://c.imgz.jp/228/71141228/71141228b_14_d_500.jpg']
        },
        {
          label: '着用イメージ',
          alt: 'OPAQUE.CLIP C71-16003 着用イメージ',
          sources: ['https://images.wear2.jp/coordinate/Grigl5lv/gOgdabfF/1691473894_276.jpg']
        },
        {
          label: 'ブラック単品',
          alt: 'OPAQUE.CLIP C71-16003 ブラック 単品写真',
          sources: ['https://c.imgz.jp/228/71141228/71141228b_8_d_500.jpg']
        }
      ],
      good: 'A4 / マチ15cm / 9ポケット。現在と同じ収納力。',
      concern: '490g。ベージュに替えても軽量化はなし。'
    },
    {
      rank: 2,
      id: 'c71-15002',
      brand: 'OPAQUE.CLIP',
      title: 'フェイクレザーA4サイズトートバッグ',
      code: 'C71-15002',
      color: 'Beige',
      weight: 430,
      url: 'https://wear.jp/item/62570083/',
      images: [
        {
          label: '単品',
          alt: 'OPAQUE.CLIP C71-15002 ベージュ 単品写真',
          sources: ['https://c.imgz.jp/436/67358436/67358436_b_22_500.jpg']
        },
        {
          label: '着用イメージ',
          alt: 'OPAQUE.CLIP C71-15002 ベージュ 着用イメージ',
          sources: ['https://c.imgz.jp/436/67358436/67358436_14_d_500.jpg']
        }
      ],
      good: '430g / A4 / マチ12cm / 中央ファスナー / 内ポケット4。',
      concern: '旧モデル。購入時は在庫確認。'
    },
    {
      rank: 3,
      id: 'c71-19033',
      brand: 'OPAQUE.CLIP',
      title: 'シュリンク合皮3層トートバッグ',
      code: 'C71-19033',
      color: 'Beige (052)',
      weight: 400,
      url: 'https://wear.jp/item/81214168/',
      images: [
        {
          label: '単品',
          alt: 'OPAQUE.CLIP C71-19033 ベージュ 単品写真',
          sources: ['https://c.imgz.jp/538/86692538/86692538_2_d_500.jpg']
        },
        {
          label: '着用イメージ',
          alt: 'OPAQUE.CLIP C71-19033 着用イメージ',
          sources: ['https://images.wear2.jp/coordinate/7qxo0t/20250131161559329/20250131161559329_276.jpg']
        }
      ],
      good: '400g / A4 / マチ13.5cm / 3層構造。',
      concern: '現行より横幅が広め。'
    },
    {
      rank: 4,
      id: 'c70-07026',
      brand: 'SHOO・LA・RUE',
      title: 'ふわっと軽いボックストートバッグ',
      code: 'C70-07026',
      color: 'Beige (052)',
      weight: 390,
      url: 'https://store.world.co.jp/brand/shoo-la-rue/item/BRC7026F0081?clr_id=102',
      images: [
        {
          label: '単品',
          alt: 'SHOO・LA・RUE C70-07026 ベージュ 単品写真',
          sources: [
            'https://store.world.co.jp/img/item/BRC70/BRC7026F0081/BRC7026F0081_l1_c102.jpg',
            'https://z-shopping.c.yimg.jp/307/110991307/110991307_b_01_500.jpg'
          ]
        },
        {
          label: '着用イメージ',
          alt: 'SHOO・LA・RUE C70-07026 ベージュ 着用イメージ',
          sources: [
            'https://store.world.co.jp/img/item/BRC70/BRC7026F0081/BRC7026F0081_l2_c102.jpg',
            'https://z-shopping.c.yimg.jp/307/110991307/110991307_14_d_500.jpg'
          ]
        }
      ],
      good: '390g / A4 / マチ11.5cm / 肩掛け。',
      concern: '現行よりボックス型。'
    },
    {
      rank: 5,
      id: 'c71-14002',
      brand: 'OPAQUE.CLIP',
      title: 'フロントベルトデザイントートバッグ',
      code: 'C71-14002',
      color: 'Beige (052)',
      weight: 440,
      url: 'https://store.world.co.jp/brand/opaque-clip/item/BRC7125F0002',
      images: [
        {
          label: '単品',
          alt: 'OPAQUE.CLIP C71-14002 ベージュ 単品写真',
          sources: [
            'https://store.world.co.jp/img/item/BRC71/BRC7125F0002/BRC7125F0002_l1_a009.jpg',
            'https://sc3.locondo.jp/contents/commodity_image/OP/OP1488AW055368_6_l.jpg'
          ]
        },
        {
          label: '着用イメージ',
          alt: 'OPAQUE.CLIP C71-14002 ベージュ 着用イメージ',
          sources: [
            'https://sc3.locondo.jp/contents/commodity_image/OP/OP1488AW055368_1_l.jpg',
            'https://store.world.co.jp/img/item/BRC71/BRC7125F0002/BRC7125F0002_l2_a009.jpg'
          ]
        }
      ],
      good: '440g / A4 / マチ11cm / 肩掛け。',
      concern: 'フロントベルトで装飾感あり。'
    },
    {
      rank: 6,
      id: 'c59-17010',
      brand: 'index',
      title: 'ビジュー付きA4トートバッグ',
      code: 'C59-17010',
      color: 'Beige (052)',
      weight: 300,
      url: 'https://store.world.co.jp/brand/index/item/BRC5926F0001?clr_id=102',
      images: [
        {
          label: '単品',
          alt: 'index C59-17010 ベージュ 単品写真',
          sources: [
            'https://store.world.co.jp/img/item/BRC59/BRC5926F0001/BRC5926F0001_l1_c103.jpg',
            'https://store.world.co.jp/img/item/BRC59/BRC5926F0001/BRC5926F0001_l1_c101.jpg'
          ]
        },
        {
          label: '着用イメージ',
          alt: 'index C59-17010 着用イメージ',
          sources: [
            'https://store.world.co.jp/img/item/BRC59/BRC5926F0001/BRC5926F0001_l2_c103.jpg',
            'https://store.world.co.jp/img/item/BRC59/BRC5926F0001/BRC5926F0001_l1_c101.jpg'
          ]
        }
      ],
      good: '300g / A4 / 持ち手上がり27cm。',
      concern: 'マチ8.5cm。弁当（奥行11cm）は要確認。'
    }
  ];

  const baseline = models[0];
  const candidates = models.slice(1);
  const totalWeight = weight => FIXED_LOAD_G + weight;
  const totalKg = weight => `${(totalWeight(weight) / 1000).toFixed(2)}kg`;
  const loadIndex = weight => Math.round(totalWeight(weight) / CURRENT_TOTAL_G * 100);
  const diffText = weight => {
    const d = weight - CURRENT_BAG_G;
    if (d === 0) return '現在と同じ';
    return `現在より ${d < 0 ? '−' : '+'}${Math.abs(d)}g`;
  };

  function mediaMarkup(item) {
    const first = item.images[0];
    return `
      <div class="product-media">
        <button class="product-main-button" type="button" aria-label="画像を拡大表示">
          <img class="product-main-image" src="${first.sources[0]}" alt="${first.alt}" referrerpolicy="no-referrer">
        </button>
        <div class="image-fallback">画像を表示できません。「商品ページを見る」から確認してください。</div>
      </div>
      <div class="thumb-rail" aria-label="画像を切り替える"></div>`;
  }

  function metricsMarkup(item) {
    return `
      <div class="metric-grid">
        <div class="metric"><strong class="metric-value">${item.weight}g</strong><span class="metric-label">単体重量</span><span class="metric-sub">${diffText(item.weight)}</span></div>
        <div class="metric"><strong class="metric-value">${totalKg(item.weight)}</strong><span class="metric-label">通勤総重量</span><span class="metric-sub">荷物2,147g</span></div>
        <div class="metric"><strong class="metric-value">${loadIndex(item.weight)}</strong><span class="metric-label">体感負荷</span><span class="metric-sub">現行＝100</span></div>
      </div>`;
  }

  function cardMarkup(item, baselineMode = false) {
    return `
      <article class="product-card" data-id="${item.id}">
        ${mediaMarkup(item)}
        <div class="product-body">
          <div class="rank-row">
            <span class="rank ${baselineMode ? 'baseline-rank' : ''}">${baselineMode ? '基準' : `#${item.rank}`}</span>
          </div>
          <p class="product-kicker">${item.brand}</p>
          <h3 class="product-title">${item.title}</h3>
          <p class="product-code">${item.code}</p>
          <p class="variant-name">${item.color}</p>
          ${metricsMarkup(item)}
          <div class="pros-cons">
            <div class="note-row good"><span class="note-label">特徴</span><p>${item.good}</p></div>
            <div class="note-row concern"><span class="note-label">確認</span><p>${item.concern}</p></div>
          </div>
          <a class="product-link" href="${item.url}" target="_blank" rel="noopener noreferrer">商品ページを見る</a>
        </div>
      </article>`;
  }

  function setImageWithFallback(img, media, view) {
    let index = 0;
    const tryNext = () => {
      if (index >= view.sources.length) {
        media.classList.add('is-error');
        return;
      }
      img.src = view.sources[index++];
      img.alt = view.alt;
    };
    img.onerror = tryNext;
    img.onload = () => media.classList.remove('is-error');
    tryNext();
  }

  function setupGalleries(root) {
    root.querySelectorAll('.product-card').forEach(card => {
      const item = models.find(x => x.id === card.dataset.id);
      if (!item) return;
      const main = card.querySelector('.product-main-image');
      const media = card.querySelector('.product-media');
      const rail = card.querySelector('.thumb-rail');
      rail.innerHTML = '';

      item.images.forEach((view, index) => {
        const b = document.createElement('button');
        b.className = 'thumb';
        b.type = 'button';
        b.setAttribute('aria-current', index === 0 ? 'true' : 'false');
        b.setAttribute('aria-label', `${view.label}を表示`);
        b.innerHTML = `<img src="${view.sources[0]}" alt="" referrerpolicy="no-referrer" loading="lazy">`;
        b.addEventListener('click', () => {
          setImageWithFallback(main, media, view);
          rail.querySelectorAll('.thumb').forEach(x => x.setAttribute('aria-current', x === b ? 'true' : 'false'));
        });
        rail.appendChild(b);
      });

      setImageWithFallback(main, media, item.images[0]);
      card.querySelector('.product-main-button')?.addEventListener('click', () => openLightbox(main.src, main.alt));
    });
  }

  function render() {
    document.getElementById('baselineCard').innerHTML = cardMarkup(baseline, true);
    document.getElementById('candidateList').innerHTML = candidates.map(x => cardMarkup(x)).join('');
    setupGalleries(document);
    renderCharts();
  }

  function chartData() {
    return models.map(item => ({
      label: item.baseline ? `${item.code} 現在` : `#${item.rank} ${item.code}`,
      weight: item.weight,
      total: totalWeight(item.weight),
      load: loadIndex(item.weight),
      current: item.baseline
    })).sort((a, b) => a.load - b.load || a.weight - b.weight);
  }

  function bar(item, value, max, display) {
    return `<div class="bar-row ${item.current ? 'is-current' : ''}"><div class="bar-meta"><span class="bar-label">${item.label}</span><strong class="bar-value">${display}</strong></div><div class="bar-track"><div class="bar-fill" data-width="${Math.max(8, value / max * 100).toFixed(1)}%"></div></div></div>`;
  }

  function renderCharts() {
    const rows = chartData();
    const maxLoad = Math.max(...rows.map(x => x.load));
    const maxTotal = Math.max(...rows.map(x => x.total));
    document.getElementById('loadChart').innerHTML = `<h3 class="chart-title">体感負荷</h3><p class="chart-caption">小さいほど軽い</p>${rows.map(x => bar(x, x.load, maxLoad, String(x.load))).join('')}`;
    document.getElementById('weightChart').innerHTML = `<h3 class="chart-title">通勤総重量</h3><p class="chart-caption">同じ荷物を入れた場合</p>${rows.map(x => bar(x, x.total, maxTotal, `${(x.total/1000).toFixed(2)}kg`)).join('')}`;
    requestAnimationFrame(() => document.querySelectorAll('.bar-fill').forEach(el => el.style.width = el.dataset.width));
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  let scale = 1, x = 0, y = 0, startDistance = 0, startScale = 1, lastX = 0, lastY = 0;
  const applyTransform = () => { lightboxImage.style.transform = `translate(${x}px, ${y}px) scale(${scale})`; };

  function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt || '';
    scale = 1; x = 0; y = 0; applyTransform();
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
  }

  document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-stage')) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });

  const stage = lightbox?.querySelector('.lightbox-stage');
  stage?.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
      const [a,b] = e.touches;
      startDistance = Math.hypot(a.clientX-b.clientX, a.clientY-b.clientY);
      startScale = scale;
    } else if (e.touches.length === 1) {
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
    }
  }, {passive:true});

  stage?.addEventListener('touchmove', e => {
    if (e.touches.length === 2) {
      const [a,b] = e.touches;
      const d = Math.hypot(a.clientX-b.clientX, a.clientY-b.clientY);
      scale = Math.min(4, Math.max(1, startScale * d / startDistance));
      if (scale === 1) { x = 0; y = 0; }
      applyTransform();
    } else if (e.touches.length === 1 && scale > 1) {
      const t = e.touches[0];
      x += t.clientX-lastX;
      y += t.clientY-lastY;
      lastX = t.clientX;
      lastY = t.clientY;
      applyTransform();
    }
  }, {passive:true});

  render();
})();
