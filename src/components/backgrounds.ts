interface Backgrounds {
    background_css: String;
    background_tailwind: String;
}
export const backgrounds:Backgrounds[] = [
    {
        background_tailwind:`<div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>`,
        background_css: `<div style="position: absolute; top: 0; z-index: -1; height: 100%; width: 100%; background: radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0)), #0a0a0a;"></div>`
    },
    {
        background_tailwind:`<div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950" style="background-image:linear-gradient(38.73deg, rgba(204, 0, 187, 0.25) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.25) 100%)"></div>`,
        background_css: ""
    },
    {
        background_tailwind:`<div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>`,
        background_css: ""
    },
    {
        background_tailwind: `<div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>`,
        background_css: ""
    },
    {
        background_tailwind: `<div class="absolute w-full h-full bg-[#0b0d13]">
        <div class="absolute bottom-0 right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,200,255,0.15),rgba(255,255,255,0))]"></div>
        <div class="absolute bottom-0 left-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,255,242,0.15),rgba(255,255,255,0))]"></div>
      </div>`,
        background_css: `<div style="background-color:#0b0d13; width:100%; height:100%; position:absolute; ">
        <div style="
    position: absolute;
    bottom: 0;
    right: -10%;
    top: -10%;
    height: 500px;
    width: 500px;
    border-radius: 50%;
    background: radial-gradient(
      circle farthest-side,
      rgba(0, 200, 255, 0.15),
      rgba(255, 255, 255, 0)
    );">
    </div>
    <div style="position: absolute;
    bottom: 0%;
    left: -10%;
    height: 500px;
    width: 500px;
    border-radius: 50%;
    background: radial-gradient(
      circle farthest-side,
      rgba(0, 255, 242, 0.15),
      rgba(255, 255, 255, 0)
      );"></div>
    
    </div>`
    },
    {
        background_tailwind: `<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>`,
        background_css: ""
    },
    {
        background_tailwind: `<div class="absolute h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>`,
        background_css: ``
    },
    {
        background_tailwind: `<div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>`,
        background_css: ``
    },
    {
        background_tailwind: `<div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>`,
        background_css: ``
    },
    {
        background_tailwind: `<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>`,
        background_css: ``
    },
    {
        background_tailwind: `<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>`,
        background_css: ``
    },
    {
        background_tailwind: `<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>`,
        background_css: ``
    },
    {
        background_tailwind: `<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>`,
        background_css: ``
    },
    {
        background_tailwind: `<div class="absolute h-full w-full bg-white "><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div>`,
        background_css: ``
    },
    {
        background_tailwind: `<div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>`,
        background_css: ``
    },
    {
        background_tailwind: `<div class="absolute h-full w-full bg-neutral-900"><div class="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div></div>`,
        background_css: ``
    },
    {
        background_tailwind: `<div class="absolute h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>`,
        background_css: ``
    },
    {
        background_tailwind: `<div class="absolute h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>`,
        background_css: ``
    },
    {
        background_tailwind: `<div class="absolute h-full w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>`,
        background_css: ``
    },
    {
        background_tailwind: `<div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>`,
        background_css: ``
    },
    {
        background_tailwind: `<div class="absolute h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>`,
        background_css: ``
    },
    {
        background_tailwind: `<div class="absolute w-full h-full bg-gradient-to-br from-emerald-300 to-teal-900"></div>`,
        background_css: `<div
        style="position:absolute; width:100%; height:100%; background-image: linear-gradient(140deg, rgb(72, 145, 161) 25%, rgb(0, 49, 61) 90%);"></div>`
    },
    {background_css: `<div style="position:absolute; width:100%; height:100%; background-image: linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%);"></div>`,
    background_tailwind: ``
},

{background_css: `<div  style="position:absolute; width:100%; height:100%; background-image: linear-gradient(140deg, rgb(244, 229, 240), rgb(229, 54, 171), rgb(92, 3, 188), rgb(14, 7, 37));">
</div>`,
    background_tailwind: ``
},
{background_css: `<div  style="position:absolute; width:100%; height:100%; background-image: linear-gradient(135deg, rgb(238, 221, 243), rgb(238, 146, 177), rgb(99, 48, 180));"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(113.96deg, rgb(69, 190, 232) 13.54%, rgb(214, 161, 172) 50%, rgb(232, 140, 93) 85.42%);"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(113.96deg, rgb(69, 233, 159) 11.98%, rgb(213, 168, 155) 50%, rgb(232, 70, 152) 85.42%);"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(113.96deg, rgb(69, 223, 232) 11.98%, rgb(211, 170, 175) 50%, rgb(232, 103, 100) 85.42%);"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(293.96deg, rgb(160, 233, 125) 11.46%, rgb(169, 203, 177) 50%, rgb(192, 128, 232) 88.54%);"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(-45deg, rgb(114, 122, 154), rgb(216, 219, 233));"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(135deg, rgb(48, 48, 48), rgb(16, 16, 16));"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(135deg, rgb(10, 207, 254), rgb(73, 90, 255));"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(-45deg, rgb(61, 78, 129) 0%, rgb(87, 83, 201) 48%, rgb(110, 127, 243) 100%);"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(135deg, rgb(198, 255, 221), rgb(251, 215, 134), rgb(247, 121, 125));"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(135deg, rgb(248, 208, 129), rgb(238, 129, 68));"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(-45deg, rgb(248, 54, 0) 0%, rgb(249, 212, 35) 100%);"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(135deg, rgb(212, 252, 121), rgb(150, 230, 161));"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(135deg, rgb(67, 233, 123), rgb(56, 249, 215));"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(135deg, rgb(249, 240, 71), rgb(15, 216, 80));"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(-225deg, rgb(105, 234, 203) 0%, rgb(234, 204, 248) 48%, rgb(102, 84, 241) 100%);"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(135deg, rgb(215, 235, 235), rgb(244, 175, 233), rgb(157, 126, 243));"></div>`,
    background_tailwind: ``
},

{background_css: `<div 
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(-45deg, rgb(80, 82, 133) 0%, rgb(88, 94, 146) 12%, rgb(101, 104, 159) 25%, rgb(116, 116, 176) 37%, rgb(126, 126, 187) 50%, rgb(131, 137, 199) 62%, rgb(151, 149, 212) 75%, rgb(162, 161, 220) 87%, rgb(181, 174, 228) 100%);"></div>`,
    background_tailwind: ``
},

{background_css: `<div
style="position:absolute; width:100%; height:100%; background-image: linear-gradient(140deg, rgb(72, 145, 161) 25%, rgb(0, 49, 61) 90%);"></div>`,
    background_tailwind: ``
},




]
