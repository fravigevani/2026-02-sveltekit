<script lang="ts">
  import {
    imgBrowserControls,
    imgClose,
    imgCurveR,
    imgContainer,
    imgContainer2,
    imgBack,
    imgForward,
    imgRefresh,
    imgHome,
    imgIconFileFolderOpen24Px
  } from "$lib/constants/images";
</script>

<div class="browser-frame">
  <div class="toolbar tabs-row">
    <div class="tab active">
      <div class="tab-favicon"></div>
      <span>Alfabeto fotografico</span>
      <div class="tab-close">
        <img alt="close" src={imgClose} />
      </div>
    </div>
    <div class="tab-curve">
      <img alt="curve" src={imgCurveR} />
    </div>
    <img class="browser-controls" alt="browser controls" src={imgBrowserControls} />
  </div>

  <div class="toolbar url-row">
    <div class="url-shell">
      <div class="secure-group">
        <div class="secure-icon">
          <img alt="secure" src={imgContainer} />
        </div>
        <span>Alfabeto_fotografico.com</span>
      </div>
      <div class="favorite-icon">
        <img alt="favorite" src={imgContainer2} />
      </div>
    </div>
    <div class="icon-row">
      <img alt="back" src={imgBack} />
      <img alt="forward" src={imgForward} />
      <img alt="refresh" src={imgRefresh} />
      <img alt="home" src={imgHome} />
    </div>
    <div class="folders-row">
      <div class="folder-pill">
        <img alt="folder" src={imgIconFileFolderOpen24Px} />
        <span>News</span>
      </div>
      <div class="folder-pill">
        <img alt="folder" src={imgIconFileFolderOpen24Px} />
        <span>Design</span>
      </div>
      <div class="folder-pill">
        <img alt="folder" src={imgIconFileFolderOpen24Px} />
        <span>Benchmark</span>
      </div>
    </div>
  </div>
</div>

<style>
  .browser-frame {
    width: 100%;
    max-width: 1512px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
  }

  .toolbar {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .tabs-row {
    background: #202124;
    height: 42px;
    display: flex;
    align-items: center;
    padding-left: 78px;
    gap: 12px;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 4px 8px 8px;
    background: #35363a;
    border-radius: 8px 8px 0 0;
  }

  .tab-favicon {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background: linear-gradient(124.78deg, #fdc567 0%, #f65254 100%);
  }

  .tab span {
    color: white;
    font-family: var(--font-secondary);
    font-size: 12px;
    letter-spacing: 0.2px;
    line-height: 1;
    white-space: nowrap;
  }

  .tab-close img,
  .tab-curve img,
  .browser-controls {
    display: block;
    width: auto;
    height: 18px;
  }

  .tab-close {
    width: 18px;
    height: 18px;
  }

  .tab-curve {
    margin-left: 8px;
  }

  .browser-controls {
    position: absolute;
    left: 13px;
    top: 12px;
  }

  .url-row {
    background: #35363a;
    border-bottom: 1px solid #4d4d4d;
    min-height: 70px;
    padding: 5px 12px 14px;
    display: grid;
    gap: 8px;
  }

  .url-shell {
    background: #202124;
    border-radius: 16px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 10px;
  }

  .secure-group {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    font-family: var(--font-secondary);
    font-size: 14px;
    letter-spacing: 0.25px;
  }

  .secure-icon {
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .secure-icon img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .favorite-icon img {
    width: 16px;
    height: 16px;
  }

  .icon-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .icon-row img {
    width: 16px;
    height: 16px;
  }

  .folders-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .folder-pill {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: white;
    font-family: var(--font-secondary);
    font-size: 10px;
    white-space: nowrap;
  }

  .folder-pill img {
    width: 18px;
    height: 18px;
  }
</style>
