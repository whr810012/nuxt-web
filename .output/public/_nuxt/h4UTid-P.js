const n=()=>{const o="toast-style";if(!document.getElementById(o)){const t=document.createElement("style");t.id=o,t.textContent=`
      .toast {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #9d19d1;
        padding: 15px 30px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: opacity 0.5s ease, transform 0.5s ease;
        color: #e0e0e0;
        opacity: 1;
        z-index: 1000;
      }
      .toast.hidden {
        opacity: 0;
        transform: translateX(-50%) translateY(-20px);
      }
    `,document.head.appendChild(t)}return{showToast:(t,s=3e3)=>{console.log("Toast message:",t);const e=document.createElement("div");e.className="toast",e.textContent=t,document.body.appendChild(e),setTimeout(()=>{e.classList.add("hidden"),setTimeout(()=>{e.remove()},500)},s)}}};export{n as u};
