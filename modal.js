   1  /* 
   2   * 1) GLOBAL RESET & BODY
   3   */
   4  * {
   5    box-sizing: border-box;
   6    margin: 0;
   7    padding: 0;
   8  }
   9
  10  html, body {
  11    height: 100%;
  12  }
  13
  14  body {
  15    font-family: Arial, sans-serif;
  16    line-height: 1.6;
  17    background-color: #f8f8f8;
  18    color: #333;
  19    /* Sticky footer trick */
  20    display: flex;
  21    flex-direction: column;
  22    min-height: 100vh;
  23  }
  24
  25  main {
  26    flex: 1;
  27  }
  28
  29  /* 
  30   * 2) NAVIGATION BAR 
  31   */
  32  .top-nav {
  33    display: flex;
  34    justify-content: flex-start;
  35    align-items: center;
  36    background-color: #0056b3;
  37    border-bottom: 5px solid #004080;
  38  }
  39
  40  .top-nav a {
  41    float: none; /* override old float */
  42    color: #fff;
  43    text-align: center;
  44    padding: 14px 20px;
  45    text-decoration: none;
  46    font-weight: bold;
  47  }
  48
  49  .top-nav a:hover {
  50    background-color: #004080;
  51  }
  52
  53  /* 
  54   * 3) SIDEBAR & LAYOUT
  55   */
  56  .sidebar {
  57    width: 200px;
  58    float: left;
  59    background-color: #efefef;
  60    border-right: 2px solid #ccc;
  61    padding: 20px 0;
  62  }
  63
  64  .link-container {
  65    display: flex;
  66    flex-direction: column;
  67    gap: 10px;
  68    padding-left: 20px;
  69  }
  70
  71  .link-container a {
  72    color: #0056b3;
  73    text-decoration: none;
  74    font-weight: bold;
  75  }
  76
  77  .link-container a:hover {
  78    text-decoration: underline;
  79  }
  80
  81  .container {
  82    margin-left: 220px; /* 200px + 20px offset */
  83    padding: 20px;
  84  }
  85
  86  /* 
  87   * 4) SECTION STYLES
  88   */
  89  .section {
  90    margin-bottom: 40px;
  91    background-color: #fff;
  92    padding: 20px;
  93    border: 2px solid #ddd;
  94    border-radius: 5px;
  95  }
  96
  97  .section h2 {
  98    margin-bottom: 1rem;
  99    color: #0056b3;
 100  }
 101
 102  /* 
 103   * 5) FOOTER
 104   */
 105  footer {
 106    background-color: #0056b3;
 107    color: white;
 108    padding: 10px 20px;
 109    text-align: center;
 110    border-top: 5px solid #004080;
 111  }
 112
 113  /* 
 114   * 6) MODAL / LIGHTBOX (if .zoom-img used)
 115   */
 116  .zoom-img {
 117    width: 50%;
 118    max-width: 800px; /* cap huge images */
 119    height: auto;
 120    cursor: zoom-in;
 121    margin-bottom: 1rem;
 122    border: 2px solid #ccc;
 123    border-radius: 4px;
 124  }
 125
 126  .modal {
 127    display: none;
 128    position: fixed;
 129    z-index: 999;
 130    left: 0;
 131    top: 0;
 132    width: 100%;
 133    height: 100%;
 134    overflow: auto;
 135    background-color: rgba(0, 0, 0, 0.8);
 136  }
 137
 138  .modal-content {
 139    margin: auto;
 140    display: block;
 141    max-width: 80%;
 142    height: auto;
 143    border: 3px solid #fff;
 144    border-radius: 4px;
 145    margin-top: 60px;
 146  }
 147
 148  #caption {
 149    margin: 20px auto 0;
 150    display: block;
 151    text-align: center;
 152    color: #fff;
 153    max-width: 80%;
 154    font-size: 1.1rem;
 155  }
 156
 157  .close {
 158    position: absolute;
 159    top: 20px;
 160    right: 40px;
 161    color: #fff;
 162    font-size: 40px;
 163    font-weight: bold;
 164    cursor: pointer;
 165    transition: 0.3s;
 166  }
 167
 168  .close:hover,
 169  .close:focus {
 170    color: #bbb;
 171  }
 172
 173  /* 
 174   * 7) BACK TO TOP BUTTON
 175   */
 176  #backToTopBtn {
 177    display: none;
 178    position: fixed;
 179    bottom: 20px;
 180    right: 20px;
 181    padding: 10px 16px;
 182    background-color: #0056b3;
 183    color: #fff;
 184    border: none;
 185    border-radius: 4px;
 186    cursor: pointer;
 187    font-weight: bold;
 188    font-size: 1rem;
 189    z-index: 9999;
 190  }
 191
 192  #backToTopBtn:hover {
 193    background-color: #004080;
 194  }
