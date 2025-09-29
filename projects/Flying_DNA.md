<style>
  body {
    background-color: #000000 !important;  /* 黑色背景 */
  }

  /* Title (h1) */
  h1 {
    font-family: Arial, sans-serif !important;
    font-size: 32px !important;
    color: #ffffff !important;  /* 白色字体 */
    text-align: center !important; /* 居中 */
  }

  /* Description（兼容不同主题 class） */
  p.description,
  .page__lead,
  .page-description,
  header .page__lead,
  header .page-description {
    font-family: Arial, sans-serif !important;
    font-size: 24px !important;
    color: #ffffff !important;   /* 强制白色 */
    text-align: center !important; /* 居中 */
    margin: 1rem auto !important;  /* 上下留白，自动左右居中 */
    max-width: 900px !important;   /* 限制宽度 */
    display: block !important;
  }

  /* Publications / refs */
  section.refs, 
  section.refs h2,
  section.refs ul,
  section.refs li {
    color: #ffffff !important;  /* 白色字体 */
  }

  /* 去掉引用的 bullet point */
  section.refs ul {
    list-style-type: none;   /* 去掉小圆点 */
    padding-left: 0;         
    margin-left: 0;          
  }
</style>
