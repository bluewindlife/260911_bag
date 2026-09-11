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
      color: 'Black（現在使用中） / Beige（本命色）',
      weight: 490,
      url: 'https://wear.jp/item/66671652/',
      images: [
        {
          label: '単品｜ベージュ',
          alt: 'OPAQUE.CLIP C71-16003 ベージュ 単品写真',
          sources: ['https://c.imgz.jp/228/71141228/71141228b_14_d_500.jpg']
        },
        {
          label: '持ったとき',
          alt: 'OPAQUE.CLIP C71-16003 着用イメージ',
          sources: ['https://images.wear2.jp/coordinate/Grigl5lv/gOgdabfF/1691473894_276.jpg']
        },
        {
          label: '現在｜ブラック',
          alt: 'OPAQUE.CLIP C71-16003 ブラック 単品写真',
          sources: ['https://c.imgz.jp/228/71141228/71141228b_8_d_500.jpg']
        }
      ],
      reason: '妻の第一希望。「今のバッグのベージュ版が良い」が明確なので、型番単位では最優先。軽量化はしませんが、見た目と使い勝手の失敗リスクが最も低い候補です。',
      good: 'A4対応、マチ15cm、9ポケット。今と同じ収納・取り回しを維持したまま色だけ変えられます。',
      concern: '重量は今と同じ約490g。軽量化を目的にするなら他型番が有利です。'
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
          label: '持ったとき',
          alt: 'OPAQUE.CLIP C71-15002 ベージュ 着用イメージ',
          sources: ['https://c.imgz.jp/436/67358436/67358436_14_d_500.jpg']
        }
      ],
      reason: '今のバッグに近い柔らかなシュリンク合皮トートで、現行より60g軽量。見た目を大きく変えずに少し軽くしたい条件に素直に合います。',
      good: 'A4対応、肩掛け可能、マチ12cm。中央ファスナー＋内ポケット4つで、通勤用途との相性が良好。',
      concern: '旧モデルのため、気に入った場合は新品在庫・中古・後継品を探す前提です。'
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
          label: '持ったとき',
          alt: 'OPAQUE.CLIP C71-19033 着用イメージ',
          sources: ['https://images.wear2.jp/coordinate/7qxo0t/20250131161559329/20250131161559329_276.jpg']
        }
      ],
      reason: '現行より90g軽く、A4対応とマチ13.5cmを確保。軽量化と通勤バッグらしい上品さのバランスが良い候補です。',
      good: '3層構造で仕分けしやすく、持ち手上がり27cmで肩掛けしやすい設計です。',
      concern: '今のバッグより横幅がやや広め。実際に肩に掛けたときの見え方は確認したいところです。'
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
          label: '持ったとき',
          alt: 'SHOO・LA・RUE C70-07026 ベージュ 着用イメージ',
          sources: [
            'https://store.world.co.jp/img/item/BRC70/BRC7026F0081/BRC7026F0081_l2_c102.jpg',
            'https://z-shopping.c.yimg.jp/307/110991307/110991307_14_d_500.jpg'
          ]
        }
      ],
      reason: '現行より100g軽量で、A4・マチ11.5cm・肩掛けを確保。価格も比較的抑えめで、軽さと実用性を優先するなら強い候補です。',
      good: '約390g、持ち手上がり27.5cm。メイン収納の前後にも収納部があり仕事用に使いやすい構成です。',
      concern: '今のバッグよりボックス感が強く、かわいさの方向が合うかは画像での確認が重要です。'
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
          label: '持ったとき',
          alt: 'OPAQUE.CLIP C71-14002 ベージュ 着用イメージ',
          sources: [
            'https://sc3.locondo.jp/contents/commodity_image/OP/OP1488AW055368_1_l.jpg',
            'https://store.world.co.jp/img/item/BRC71/BRC7125F0002/BRC7125F0002_l2_a009.jpg'
          ]
        }
      ],
      reason: '現行より50g軽量。ベージュ合皮とゴールド金具で通勤向けですが、フロントベルトの装飾感が今のバッグより強めです。',
      good: 'A4対応、肩掛け可能、マチ11cm。きれいめで仕事用として使いやすいサイズ感です。',
      concern: '妻の「高いのに可愛くないのは嫌」という条件では、装飾の好みが合うかが最重要です。'
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
          label: '持ったとき',
          alt: 'index C59-17010 着用イメージ',
          sources: [
            'https://store.world.co.jp/img/item/BRC59/BRC5926F0001/BRC5926F0001_l2_c103.jpg',
            'https://store.world.co.jp/img/item/BRC59/BRC5926F0001/BRC5926F0001_l1_c101.jpg'
          ]
        }
      ],
      reason: '追加希望の約300g枠。現行より190g軽く、今回の候補で最軽量。フロントのビジューが妻の「かわいい」に合えば非常に有力です。',
      good: 'A4対応、約300g、持ち手上がり27cm。軽量合皮で、見た目に華やかさがあります。',
      concern: 'マチ8.5cmで今回候補では浅め。弁当（横17×奥行11cm）は向きを含め、実物または内寸で確認したい候補です。'
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
        <div class="image-fallback">画像を表示できません。下の「商品ページを見る」から確認してください。</div>
      </div>
      <div class="thumb-rail" aria-label="画像を切り替える"></div>`;
  }

  function metricsMarkup(item) {
    return `
      <div class="metric-grid">
        <div class="metric"><strong class="metric-value">${item.weight}g</strong><span class="metric-label">単体重量</span><span class="metric-sub">${diffText(item.weight)}</span></div>
        <div class="metric"><strong class="metric-value">${totalKg(item.weight)}</strong><span class="metric-label">推定通勤総重量</span><span class="metric-sub">固定荷物2,147g</span></div>
        <div class="metric"><strong class="metric-value">${loadIndex(item.weight)}</strong><span class="metric-label">推定体感負荷</span><span class="metric-sub">現行＝100</span></div>
      </div>`;
  }

  function cardMarkup(item, baselineMode = false) {
    return `
      <article class="product-card" data-id="${item.id}">
        ${mediaMarkup(item)}
        <div class="product-body">
          <div class="rank-row">
            <span class="rank ${baselineMode ? 'baseline-rank' : ''}">${baselineMode ? '基準 / 本命色あり' : `#${item.rank}`}</span>
            <span class="small-note">型番ごとに表示</span>
          </div>
          <p class="product-kicker">${item.brand}</p>
          <h3 class="product-title">${item.title}</h3>
          <p class="product-code">型番 <strong>${item.code}</strong></p>
          <p class="variant-name">${item.color}</p>
          ${metricsMarkup(item)}
          <p class="reason"><strong>${baselineMode ? 'この型番を基準にする理由' : 'この順位の理由'}</strong><br>${item.reason}</p>
          <div class="pros-cons">
            <div class="note-row good"><span class="note-label">良い点</span><p>${item.good}</p></div>
            <div class="note-row concern"><span class="note-label">気になる点</span><p>${item.concern}</p></div>
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
        b.title = view.label;
        b.innerHTML = `<img src="${view.sources[0]}" alt="" referrerpolicy="no-referrer" loading="lazy"><span class="thumb-label">${view.label}</span>`;
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
    document.getElementById('loadChart').innerHTML = `<h3 class="chart-title">推定体感負荷</h3><p class="chart-caption">小さいほど軽い。現在使用中＝100</p>${rows.map(x => bar(x, x.load, maxLoad, String(x.load))).join('')}`;
    document.getElementById('weightChart').innerHTML = `<h3 class="chart-title">推定通勤総重量</h3><p class="chart-caption">同じ荷物を入れた場合のバッグ込み重量</p>${rows.map(x => bar(x, x.total, maxTotal, `${(x.total/1000).toFixed(2)}kg`)).join('')}`;
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
  lightbox?.addEventListener('click', e => { if (e.target === lightbox || e.target.classList.contains('lightbox-stage')) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lightbox.hidden) closeLightbox(); });

  const stage = lightbox?.querySelector('.lightbox-stage');
  stage?.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
      const [a,b] = e.touches;
      startDistance = Math.hypot(a.clientX-b.clientX, a.clientY-b.clientY);
      startScale = scale;
    } else if (e.touches.length === 1) {
      lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
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
      x += t.clientX-lastX; y += t.clientY-lastY; lastX=t.clientX; lastY=t.clientY; applyTransform();
    }
  }, {passive:true});

  render();
})();
