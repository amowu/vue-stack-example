<template>
  <div>
    <p>heroId: {{ $route.params.heroId }}</p>
    <ul>
      <li class="hero-status">
        STR
        <input type="number" name="str" min="0" max="25" value="2">
      </li>
      <li class="hero-status">
        INT
        <input type="number" name="int" min="0" max="25" value="7">
      </li>
      <li class="hero-status">
        AGI
        <input type="number" name="agi" min="0" max="25" value="9">
      </li>
      <li class="hero-status">
        LUK
        <input type="number" name="luk" min="0" max="25" value="7">
      </li>
    </ul>
    <div>
      剩餘點數：
      <output name="hero-status-sum">0</output>
    </div>
    <button name="hero-status-updated-btn">儲存</button>
  </div>
</template>
