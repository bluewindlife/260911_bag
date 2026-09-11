(() => {
  'use strict';

  const FIXED_LOAD_G = 2147;
  const CURRENT_BAG_G = 490;
  const CURRENT_TOTAL_G = FIXED_LOAD_G + CURRENT_BAG_G;

  const baseline = {
    id: 'current-black',
    brand: 'OPAQUE.CLIP',
    title: '9ポケット トートバッグ',
    code: 'C71-16003',
    color: 'Black / 現在使用中',
    weight: 490,
    url: 'https://wear.jp/item/66671652/',
    images: [
      ['https://c.imgz.jp/228/71141228/71141228b_8_d_500.jpg', '現在使用中のOPAQUE.CLIP 9ポケットトート ブラック']
    ],
    reason: '今の使い勝手と見た目の基準。容量とマチ15cmは十分ですが、持ち手の劣化をきっかけに買い替えを検討。',
    good: 'A4対応、マチ15cm、9ポケット。弁当を含む現在の通勤荷物が問題なく入る。',
    concern: '単体約490g。今回の「少し軽くする」比較では基準重量になります。'
  };

  const candidates = [
    {
      rank: 1,
      id: 'opaque-15002',
      brand: 'OPAQUE.CLIP',
      title: 'フェイクレザーA4サイズトートバッグ',
      code: 'C71-15002',
      color: 'Beige',
      weight: 430,
      url: 'https://wear.jp/item/62570083/',
      images: [
        ['https://c.imgz.jp/436/67358436/67358436_b_22_500.jpg', 'OPAQUE.CLIP C71-15002 ベージュ 商品画像'],
        ['https://c.imgz.jp/436/67358436/67358436_14_d_500.jpg', 'OPAQUE.CLIP C71-15002 ベージュ 着用イメージ']
      ],
      reason: '今のバッグに近い、シンプルなシュリンク合皮トート。見た目を大きく変えずに60g軽くできるため、最初に見せたい候補です。',
      good: 'A4対応、肩掛け可能、マチ12cm。中央ファスナーと内ポケット4つがあり、通勤用途にも合わせやすい。',
      concern: '旧モデルのため、気に入った場合は新品在庫・中古・後継品を探す必要があります。'
    },
    {
      rank: 2,
      id: 'opaque-19033',
      brand: 'OPAQUE.CLIP',
      title: 'シュリンク合皮3層トートバッグ',
      code: 'C71-19033',
      color: 'Beige (052)',
      weight: 400,
      url: 'https://voi.0101.co.jp/voi/wsg/wrt-5_mcd-CE016_cpg-746_pno-11_ino-01.html',
      images: [],
      reason: '今のバッグと同じシュリンク合皮系で、約90g軽量。マチ13.5cmを残しているため、弁当の収まりと軽さのバランスが良好です。',
      good: 'A4対応、肩掛け可能、3層構造。表面の凹凸でキズが目立ちにくく、通勤向けの上品なデザイン。',
      concern: '掲載ページではベージュ展開を確認済み。色違い画像の混在を避けるため、このページでは画像を無理に転載せずリンク先で確認できるようにしています。'
    },
    {
      rank: 3,
      id: 'shoo-box',
      brand: 'SHOO・LA・RUE',
      title: 'ふわっと軽いボックストートバッグ',
      code: 'C70-07026',
      color: 'Beige (052)',
      weight: 390,
      url: 'https://store.world.co.jp/brand/shoo-la-rue/item/BRC7026F0081?clr_id=102',
      images: [],
      reason: '今回の本命候補では最軽量。今より100g軽く、マチ11.5cmとA4収納を確保しています。現在販売ページが確認しやすいのも利点です。',
      good: '約390g、A4対応、持ち手上がり27.5cm。前後の収納スペースがあり、仕事用として実用的。',
      concern: '今のバッグよりボックス感が強いため、見た目の好みは実物写真を見て判断したい候補です。'
    },
    {
      rank: 4,
      id: 'current-beige',
      brand: 'OPAQUE.CLIP',
      title: '9ポケット トートバッグ',
      code: 'C71-16003',
      color: 'Beige',
      weight: 490,
      url: 'https://wear.jp/item/66671652/',
      images: [
        ['https://c.imgz.jp/228/71141228/71141228b_14_d_500.jpg', 'OPAQUE.CLIP C71-16003 ベージュ イメージ']
      ],
      reason: '「これが良い」という好みがすでに確認できている安全候補。軽量化はできませんが、デザイン満足度を最優先するなら十分合理的です。',
      good: '今と同じ収納力・使い勝手をそのまま維持。色だけベージュに変えられるため、買い替え後の違和感が最も少ない。',
      concern: '重量は今と同じ約490g。軽さを改善する目的には寄与しません。'
    },
    {
      rank: 5,
      id: 'opaque-frontbelt',
      brand: 'OPAQUE.CLIP',
      title: 'フロントベルトデザイントートバッグ',
      code: 'C71-14002',
      color: 'Beige (052)',
      weight: 440,
      url: 'https://store.world.co.jp/brand/opaque-clip/item/BRC7125F0002?clr_id=102',
      images: [
        ['https://store.world.co.jp/img/item/BRC71/BRC7125F0002/BRC7125F0002_l1_a009.jpg', 'OPAQUE.CLIP C71-14002 ベージュ 商品画像'],
        ['https://sc3.locondo.jp/contents/commodity_image/OP/OP1488AW055368_1_l.jpg', 'OPAQUE.CLIP C71-14002 ベージュ 着用イメージ']
      ],
      reason: '約50g軽く、ベージュのシュリンク合皮とゴールド金具で通勤向け。ただしフロントベルトがある分、今のバッグより装飾感があります。',
      good: 'A4対応、肩掛け可能、3層構造。高さ30cm・マチ11cmで通勤荷物をまとめやすい。',
      concern: '見た目が今のバッグより少しシャープ。かわいさの方向が合うかを画像で確認したい候補です。'
    }
  ];

  const totalWeight = weight => FIXED_LOAD_G + weight;
  const totalKg = weight => `${(totalWeight(weight) / 1000).toFixed(2)}kg`;
  const loadIndex = weight => Math.round(totalWeight(weight) / CURRENT_TOTAL_G * 100);
  const diffText = weight => {
    const d = weight - CURRENT_BAG_G;
    if (d === 0) return '現在と同じ';
    return `現在より ${d < 0 ? '−' : '+'}${Math.abs(d)}g`;
  };

  function mediaMarkup(item) {
    if (!item.images.length) {
      return `
        <div class="product-media is-placeholder">
          <div class="placeholder-inner">
            <div class="placeholder-swatch" aria-hidden="true"></div>
            <strong>${item.color}</strong>
            <p>指定色と異なる写真を載せないため、画像はリンク先の商品ページで確認してください。</p>
          </div>
        </div>`;
    }
    const [src, alt] = item.images[0];
    return `
      <div class="product-media">
        <button class="product-main-button" type="button" aria-label="画像を拡大表示">
          <img class="product-main-image" src="${src}" alt="${alt}" referrerpolicy="no-referrer">
        </button>
      </div>
      ${item.images.length > 1 ? '<div class="thumb-rail" aria-label="画像を切り替える"></div>' : ''}`;
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
            <span class="rank ${baselineMode ? 'baseline-rank' : ''}">${baselineMode ? '基準' : `#${item.rank}`}</span>
            <span class="small-note">肩掛けトートとして比較</span>
          </div>
          <p class="product-kicker">${item.brand}</p>
          <h3 class="product-title">${item.title}</h3>
          <p class="product-code">型番 ${item.code}</p>
          <p class="color-name">${item.color}</p>
          ${metricsMarkup(item)}
          <p class="reason"><strong>${baselineMode ? '基準にする理由' : 'この順位の理由'}</strong><br>${item.reason}</p>
          <div class="pros-cons">
            <div class="note-row good"><span class="note-label">良い点</span><p>${item.good}</p></div>
            <div class="note-row concern"><span class="note-label">気になる点</span><p>${item.concern}</p></div>
          </div>
          <a class="product-link" href="${item.url}" target="_blank" rel="noopener noreferrer">商品ページを見る</a>
        </div>
      </article>`;
  }

  function setupGalleries(root) {
    root.querySelectorAll('.product-card').forEach(card => {
      const id = card.dataset.id;
      const item = id === baseline.id ? baseline : candidates.find(x => x.id === id);
      if (!item || item.images.length === 0) return;
      const main = card.querySelector('.product-main-image');
      const media = card.querySelector('.product-media');
      main.addEventListener('error', () => {
        media.classList.add('is-placeholder');
        media.innerHTML = `<div class="placeholder-inner"><div class="placeholder-swatch"></div><strong>${item.color}</strong><p>画像を表示できません。商品ページから確認してください。</p></div>`;
      });
      card.querySelector('.product-main-button')?.addEventListener('click', () => openLightbox(main.src, main.alt));
      const rail = card.querySelector('.thumb-rail');
      if (!rail) return;
      item.images.forEach(([src, alt], index) => {
        const b = document.createElement('button');
        b.className = 'thumb';
        b.type = 'button';
        b.setAttribute('aria-current', index === 0 ? 'true' : 'false');
        b.setAttribute('aria-label', `${index + 1}枚目を表示`);
        b.innerHTML = `<img src="${src}" alt="" referrerpolicy="no-referrer" loading="lazy">`;
        b.addEventListener('click', () => {
          main.src = src; main.alt = alt;
          rail.querySelectorAll('.thumb').forEach(x => x.setAttribute('aria-current', x === b ? 'true' : 'false'));
        });
        rail.appendChild(b);
      });
    });
  }

  function render() {
    document.getElementById('baselineCard').innerHTML = cardMarkup(baseline, true);
    document.getElementById('candidateList').innerHTML = candidates.map(x => cardMarkup(x)).join('');
    setupGalleries(document);
    renderCharts();
  }

  function chartData() {
    return [baseline, ...candidates].map(item => ({
      label: item.id === baseline.id ? '現在使用中' : `#${item.rank} ${item.code}`,
      weight: item.weight,
      total: totalWeight(item.weight),
      load: loadIndex(item.weight),
      current: item.id === baseline.id
    })).sort((a, b) => a.load - b.load || a.weight - b.weight);
  }

  function renderCharts() {
    const rows = chartData();
    const maxLoad = Math.max(...rows.map(x => x.load));
    const maxTotal = Math.max(...rows.map(x => x.total));
    document.getElementById('loadChart').innerHTML = `<h3 class="chart-title">推定体感負荷</h3><p class="chart-caption">小さいほど軽い。現在使用中＝100</p>${rows.map(x => bar(x, x.load, maxLoad, String(x.load))).join('')}`;
    document.getElementById('weightChart').innerHTML = `<h3 class="chart-title">推定通勤総重量</h3><p class="chart-caption">同じ荷物を入れた場合のバッグ込み重量</p>${rows.map(x => bar(x, x.total, maxTotal, `${(x.total/1000).toFixed(2)}kg`)).join('')}`;
    requestAnimationFrame(() => document.querySelectorAll('.bar-fill').forEach(el => el.style.width = el.dataset.width));
  }

  function bar(item, value, max, text) {
    const width = Math.max(8, value / max * 100).toFixed(1) + '%';
    return `<div class="bar-row${item.current ? ' is-current' : ''}"><div class="bar-meta"><span class="bar-label">${item.label}</span><strong class="bar-value">${text}</strong></div><div class="bar-track"><div class="bar-fill" data-width="${width}"></div></div></div>`;
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImage');
  const stage = lightbox.querySelector('.lightbox-stage');
  let scale = 1, tx = 0, ty = 0, startDistance = 0, startScale = 1, startMid = null, startTranslate = null;
  const apply = () => lightboxImg.style.transform = `translate3d(${tx}px,${ty}px,0) scale(${scale})`;
  const reset = () => { scale = 1; tx = 0; ty = 0; startDistance = 0; startMid = null; startTranslate = null; apply(); };
  function openLightbox(src, alt) { lightboxImg.src = src; lightboxImg.alt = alt || '商品画像'; lightbox.hidden = false; document.body.classList.add('lightbox-open'); reset(); }
  function closeLightbox() { lightbox.hidden = true; lightboxImg.removeAttribute('src'); document.body.classList.remove('lightbox-open'); reset(); }
  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lightbox.hidden) closeLightbox(); });
  stage.addEventListener('click', e => { if (e.target === stage && scale === 1) closeLightbox(); });
  const dist = (a,b) => Math.hypot(b.clientX-a.clientX,b.clientY-a.clientY);
  const mid = (a,b) => ({x:(a.clientX+b.clientX)/2,y:(a.clientY+b.clientY)/2});
  stage.addEventListener('touchstart', e => {
    if (e.touches.length === 2) { e.preventDefault(); startDistance = dist(e.touches[0],e.touches[1]); startScale = scale; startMid = mid(e.touches[0],e.touches[1]); startTranslate = {x:tx,y:ty}; }
    else if (e.touches.length === 1 && scale > 1) { startMid={x:e.touches[0].clientX,y:e.touches[0].clientY}; startTranslate={x:tx,y:ty}; }
  }, {passive:false});
  stage.addEventListener('touchmove', e => {
    if (e.touches.length === 2 && startDistance) { e.preventDefault(); scale=Math.min(4,Math.max(1,startScale*dist(e.touches[0],e.touches[1])/startDistance)); const m=mid(e.touches[0],e.touches[1]); tx=startTranslate.x+m.x-startMid.x; ty=startTranslate.y+m.y-startMid.y; if(scale===1){tx=0;ty=0;} apply(); }
    else if (e.touches.length===1 && scale>1 && startMid) { e.preventDefault(); tx=startTranslate.x+e.touches[0].clientX-startMid.x; ty=startTranslate.y+e.touches[0].clientY-startMid.y; apply(); }
  }, {passive:false});
  stage.addEventListener('touchend', e => { if(e.touches.length<2) startDistance=0; if(e.touches.length===0){startMid=null;startTranslate=null;} });
  stage.addEventListener('dblclick', () => { if(scale>1) reset(); else {scale=2;apply();} });

  render();
})();
