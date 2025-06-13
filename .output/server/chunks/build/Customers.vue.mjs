import { resolveComponent, mergeProps, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './page-illustration.svg.mjs';
import { P as Particles } from './Particles.vue.mjs';
import { H as Highlighter } from './Highlighter.vue.mjs';
import { H as HighlighterItem, C as CustomerBg02, a as CustomerImg02, b as CustomerBg03, c as CustomerImg03, d as CustomerBg06, e as CustomerImg06 } from './customer-bg-06.png.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { C as Cta } from './Cta02.vue.mjs';

const CustomerImg01 = "" + __buildAssetsURL("customer-01.ksPHyLsj.svg");

const CustomerBg01 = "" + __buildAssetsURL("customer-bg-01.B5AH6Fen.png");

const CustomerImg04 = "" + __buildAssetsURL("customer-04.CqlA9wY7.svg");

const CustomerBg04 = "" + __buildAssetsURL("customer-bg-04.D-PaRs_O.png");

const CustomerImg05 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='86'%20height='18'%3e%3cpath%20fill='%23CBD5E1'%20fill-rule='nonzero'%20d='M6.78%2012.81c1.376%202.275%203.902%203.801%206.712%203.801%204.153%200%206.44-3.612%206.44-3.612l.294.963c-1.923%202.52-5.358%204.038-9.2%204.038-4.425%200-8.24-2.127-9.996-5.195A7.623%207.623%200%200%201%200%209c0-4.97%204.936-9%2011.025-9%204.303%200%207.767%201.858%209.586%204.55l-7.22%204.357%204.12-6.377c-1.178-.747-2.624-1.447-4.12-1.447-4.227%200-7.708%203.555-7.708%207.815%200%201.428.402%202.769%201.096%203.911Zm19.33-.003a2.968%202.968%200%200%200-.032.439c0%201.617%201.3%202.928%202.905%202.928%201.605%200%202.905-1.31%202.905-2.928a2.913%202.913%200%200%200-2.905-2.928%202.913%202.913%200%200%200-2.873%202.489Zm10.78-.002%201.445%204.902h-5.066l-.995-3.356c-.667%201.934-2.918%203.356-5.592%203.356-3.199%200-5.792-2.036-5.792-4.548%200-.118.006-.235.017-.354.228-2.345%202.726-4.195%205.775-4.195%201.73%200%203.284.596%204.346%201.54l-1.38-4.648h-5.813s.967-.585%205.256-2.158c4.29-1.573%205.648%202.158%205.648%202.158l2.152%207.303Zm16.195%200v4.902h-5.212V6.937a1.43%201.43%200%200%200-1.423-1.435c-.587%200-1.114.362-1.327.914v11.291h-5.116V5.502h-2.983s4.15-2.534%205.59-2.534c1.363%200%202.373%201.056%202.499%202.4%202.007-1.09%203.997-2.4%205.366-2.4a2.617%202.617%200%200%201%202.606%202.553v7.284Zm8.029%200%20.725%202.416a1.891%201.891%200%200%200%201.895%201.864%201.926%201.926%200%200%200%201.905-2.156l-.616-2.124-2.166-7.459a1.924%201.924%200%200%200-1.906-1.717c-.978%200-1.91.92-2.028%201.872l2.19%207.304Zm8.294.001C68.421%2015.823%2065.602%2018%2062.278%2018c-3.323%200-6.142-2.177-7.13-5.195a7.605%207.605%200%200%201-.376-2.37c0-4.178%203.36-7.565%207.506-7.565%204.146%200%207.506%203.387%207.506%207.565%200%20.828-.132%201.625-.376%202.371Zm8.63%200v4.901h-5.116V5.502h-2.86s4.027-2.534%205.466-2.534c1.364%200%202.373%201.056%202.5%202.4%202.007-1.09%203.997-2.4%205.366-2.4A2.616%202.616%200%200%201%2086%205.52v12.186h-5.212V6.937a1.43%201.43%200%200%200-1.424-1.435c-.587%200-1.113.362-1.327.914v6.39Z'/%3e%3c/svg%3e";

const CustomerBg05 = "" + __buildAssetsURL("customer-bg-05.CF9FXdXa.png");

const CustomerImg07 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='83'%20height='23'%3e%3cpath%20fill='%23CBD5E1'%20fill-rule='nonzero'%20d='M11.693%2017.724c-.788-1.55-1.712-3.116-3.514-3.116-.344%200-.689.057-1.004.201l-.613-1.225c.747-.64%201.952-1.148%203.502-1.148%202.41%200%203.648%201.162%204.63%202.644.583-1.266.86-2.975.86-5.093%200-5.29-1.654-8.006-5.519-8.006-3.808%200-5.453%202.716-5.453%208.006%200%205.262%201.645%207.95%205.453%207.95.606%200%201.154-.066%201.658-.213Zm.944%201.846c-.849.228-1.723.345-2.602.347C4.965%2019.917%200%2015.871%200%209.987%200%204.047%204.965%200%2010.035%200c5.156%200%2010.073%204.018%2010.073%209.987%200%203.32-1.549%206.018-3.8%207.762.727%201.09%201.476%201.814%202.519%201.814%201.138%200%201.597-.88%201.674-1.569h1.482c.087.919-.373%204.736-4.515%204.736-2.51%200-3.836-1.454-4.831-3.16Zm10.731-5.048V7.72c0-.775-.286-1.119-1.176-1.119h-.947V4.794h6.19v9.642c0%201.626.88%202.343%202.219%202.343%201.1%200%202.2-.487%202.793-1.597V7.72c0-.775-.287-1.119-1.176-1.119h-1.005V4.794h6.247v10.1c0%201.006.373%201.465%201.52%201.465h.202v1.865l-5.587.89V17.19h-.115c-1.08%201.32-2.601%202.21-4.773%202.21-2.44%200-4.392-1.234-4.392-4.879m22.995%203.071c2.2%200%203.036-1.914%203.08-5.768.043-3.77-.88-5.596-3.08-5.596-1.923%200-3.128%201.826-3.128%205.596%200%203.855%201.186%205.768%203.128%205.768Zm0%201.808c-3.98%200-7.568-3.043-7.568-7.576%200-4.45%203.502-7.405%207.568-7.405%204.238%200%207.634%203.013%207.634%207.405%200%204.533-3.396%207.576-7.634%207.576Zm7.76-.287v-1.808h.603c1.493%200%201.636-.43%201.636-1.722V7.72c0-.775-.401-1.119-1.32-1.119h-.803V4.794h5.672l.287%202.956h.115c.632-2.125%202.325-3.244%203.912-3.244%201.311%200%202.334.746%202.334%202.258%200%201.052-.506%202.172-1.922%202.172-1.273%200-1.52-.862-2.573-.862-.938%200-1.665.89-1.665%202.2v5.31c0%201.292.316%201.722%201.78%201.722h.832v1.808h-8.888Zm18.885-2.105c1.808%200%202.554-1.712%202.554-3.433V11.28c-1.32%201.368-4.391%201.416-4.391%203.855%200%201.196.708%201.875%201.837%201.875Zm2.64-.01c-.746%201.435-2.277%202.402-4.42%202.402-2.487%200-4.094-1.321-4.094-3.645%200-4.677%206.515-3.434%208.428-6.533v-.336c0-2.381-.938-2.754-1.97-2.754-2.9%200-1.58%203.117-4.249%203.117-1.281%200-1.779-.774-1.779-1.644%200-1.76%202.105-3.186%206.056-3.186%203.74%200%206.036%201.033%206.036%204.755v5.94c0%20.918.335%201.416%201.139%201.416.344%200%20.631-.095.85-.248l.48%201.166c-.393.603-1.436%201.665-3.416%201.665-1.722%200-2.803-.804-2.946-2.114h-.115Z'/%3e%3c/svg%3e";

const CustomerBg07 = "" + __buildAssetsURL("customer-bg-07.BmwMNW09.png");

const CustomerImg08 = "" + __buildAssetsURL("customer-08.CMXUVcXs.svg");

const CustomerBg08 = "" + __buildAssetsURL("customer-bg-08.hlKJCCrg.png");

const CustomerImg09 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='106'%20height='35'%3e%3cpath%20fill='%23CBD5E1'%20fill-rule='nonzero'%20d='M105.935%208.333C104.493.102%2079.626-2.467%2050.39%202.595%2038.112%204.722%2027.026%207.86%2018.393%2011.39c1.326.029%202.31.331%202.907.924.467.465.703%201.104.703%201.9v.816h-2.867v-.721c0-.6-.362-.973-1.003-.973-.54%200-.871.242-.979.719-.035.188-.031.382.012.569.307%201.247%204.564%202.021%205.027%204.323.06.296.143.93.013%201.836-.266%201.856-1.905%202.573-3.993%202.573-2.914%200-4.097-1.373-4.097-3.265l.002-.895h3.073l.001%201.115c0%20.627.459.973%201.083.973.591%200%20.936-.237%201.056-.721.055-.223.08-.551-.021-.802-.569-1.419-4.544-2.081-5.033-4.375a3.82%203.82%200%200%201-.028-1.51c.047-.275.132-.542.255-.793C4.927%2017.536-.675%2022.437.065%2026.668c1.443%208.232%2026.31%2010.798%2055.545%205.736%2012.851-2.225%2024.405-5.555%2033.198-9.287-.127.006-.251.02-.383.02-2%200-3.787-.746-3.973-2.78a7.642%207.642%200%200%201-.04-.736l.002-4.676c0-.202.023-.556.046-.738.237-1.966%201.8-2.777%203.966-2.777%201.676%200%203.732.478%203.958%202.778.03.289.027.597.026.698v.442h-2.895v-.659c0-.014-.004-.26-.036-.414-.048-.235-.249-.779-1.073-.779-.815%200-1.026.545-1.08.78-.03.128-.043.313-.043.518v5.082c-.003.176.006.314.024.415.014.08.16.78%201.109.78.94%200%201.087-.7%201.1-.78a2.38%202.38%200%200%200%20.027-.415V18.3h-1.14v-1.696h4.03v3.017a7.123%207.123%200%200%201-.04.735%202.825%202.825%200%200%201-.482%201.37c9.325-4.403%2014.754-9.224%2014.024-13.394ZM30.127%2022.92l-1.466-9.91h-.053l-1.504%209.91h-3.091l2.079-11.192h5.043l2.067%2011.192h-3.075Zm14.868%200-.068-9.719h-.05l-1.818%209.72h-2.901l-1.81-9.72h-.052l-.066%209.72h-2.874l.249-11.193h4.624l1.346%208.314h.066l1.35-8.314h4.621l.249%2011.192h-2.866Zm13.538-2.169c-.31%202.168-2.445%202.547-3.955%202.547-2.506%200-4.056-1.065-4.056-3.233l.002-.884h3.036l.002%201.101c0%20.598.424.964%201.078.964.584%200%20.927-.233%201.045-.712.055-.223.078-.548-.02-.794-.559-1.392-4.503-2.074-4.982-4.332a3.753%203.753%200%200%201-.027-1.496c.333-2.047%202.309-2.473%203.899-2.473%201.422%200%202.458.31%203.078.927.463.46.698%201.093.698%201.88v.808h-2.84v-.713c0-.61-.38-.962-.992-.962-.543%200-.871.24-.979.711-.035.187-.03.379.014.563.304%201.242%204.523%202%204.985%204.28.06.29.142.915.014%201.818Zm10.515-1.017c.004.21-.016.63-.028.737-.173%201.844-1.5%202.782-3.931%202.782-2.442%200-3.77-.938-3.942-2.782a8.855%208.855%200%200%201-.028-.735v-8.01h2.905v8.263c-.003.185.007.321.025.416.036.184.22.78%201.04.78.817%200%201-.596%201.04-.778.016-.097.026-.24.026-.419v-8.263h2.893v8.01Zm12.515%203.072h-4.042l-2.713-8.865h-.045l.15%208.865h-2.817V11.728h4.212l2.507%208.516h.059l-.148-8.516h2.837v11.078Z'/%3e%3c/svg%3e";

const CustomerBg09 = "" + __buildAssetsURL("customer-bg-09.C8quLxWr.png");

const CustomerImg10 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='132'%20height='22'%3e%3cpath%20fill='%23CBD5E1'%20fill-rule='nonzero'%20d='M51.78%202.01a2.01%202.01%200%200%200%202.006%201.937%202.01%202.01%200%200%200%202.006-1.937C55.792.9%2054.894%200%2053.786%200c-1.109%200-2.007.9-2.007%202.01Zm31.657%2013.408c0%20.817.492%201.553%201.245%201.864a2.01%202.01%200%200%200%202.194-.441%202.019%202.019%200%200%200%20.43-2.2%202.012%202.012%200%200%200-3.869.777Zm-64.575-.872c-1.727%200-2.929-1.375-2.929-3.34%200-1.966%201.202-3.338%202.93-3.338%201.737%200%202.951%201.372%202.951%203.338%200%201.996-1.187%203.34-2.952%203.34Zm0-9.614c-3.655%200-6.309%202.64-6.309%206.272%200%203.633%202.655%206.273%206.309%206.273%203.67%200%206.334-2.638%206.334-6.273%200-3.634-2.663-6.275-6.333-6.275l-.001.003Zm29.044%206.586a2.99%202.99%200%200%200-.478-.676l-.112-.116.118-.112c.184-.196.352-.407.503-.63l3.213-4.805h-3.918l-2.424%203.759c-.137.201-.414.302-.828.302h-.552V2.134c0-1.421-.885-1.615-1.84-1.615h-1.634l.004%2016.773h3.471V12.26h.326c.395%200%20.663.046.788.262l1.914%203.62c.535.983%201.067%201.148%202.07%201.148h2.66l-1.982-3.281-1.313-2.492.014.001ZM64.739%204.9c-1.766%200-2.892.787-3.524%201.452l-.21.213-.075-.29c-.184-.714-.81-1.103-1.75-1.103h-1.556l.01%2012.114h3.447v-5.583c0-.546.07-1.02.215-1.452.383-1.309%201.453-2.122%202.79-2.122%201.076%200%201.496.57%201.496%202.04v5.277c0%201.255.58%201.842%201.833%201.842h1.64l-.005-7.706c0-3.06-1.491-4.68-4.312-4.68l.001-.002Zm-10.9.277h-1.635l.011%2012.115h1.743l.061.003.813-.003h.808v-.004h.005l.007-10.27c0-1.239-.59-1.84-1.813-1.84Zm-21.442%209.368c-1.727%200-2.93-1.375-2.93-3.34%200-1.966%201.202-3.338%202.932-3.338s2.95%201.372%202.95%203.337c0%201.997-1.187%203.34-2.95%203.34h-.002Zm0-9.614c-3.658%200-6.313%202.639-6.313%206.272%200%203.633%202.655%206.272%206.316%206.272s6.334-2.638%206.334-6.272c0-3.634-2.655-6.275-6.334-6.275l-.003.003Zm73.872%209.615c-1.727%200-2.931-1.375-2.931-3.34%200-1.966%201.204-3.338%202.931-3.338%201.735%200%202.952%201.372%202.952%203.338%200%201.996-1.187%203.34-2.952%203.34Zm0-9.614c-3.658%200-6.312%202.64-6.312%206.272%200%203.633%202.655%206.273%206.312%206.273%203.666%200%206.334-2.638%206.334-6.273%200-3.634-2.655-6.275-6.334-6.275v.003Zm-30.038%209.08c-1.858%200-2.519-1.646-2.519-3.191%200-.68.17-2.898%202.34-2.898%201.078%200%202.514.313%202.514%203.01%200%202.544-1.27%203.077-2.336%203.077l.001.003Zm4.1-8.864c-.644%200-1.14.262-1.377.74l-.093.184-.157-.14c-.548-.482-1.53-1.054-3.125-1.054-3.176%200-5.314%202.426-5.314%206.034%200%203.608%202.212%206.126%205.377%206.126%201.08%200%201.936-.257%202.613-.778l.275-.2v.336c0%201.618-1.028%202.511-2.893%202.511a6.754%206.754%200%200%201-2.285-.428c-.719-.221-1.143-.038-1.432.697l-.27.678-.381.991.234.126c1.195.644%202.749%201.029%204.153%201.029%202.89%200%206.27-1.505%206.27-5.74l.013-11.112H80.33Zm-74.55%209.26-2.697-.003v-3.36c0-.72.269-1.092.857-1.179h1.84c1.313%200%202.15.862%202.15%202.258-.001%201.434-.829%202.282-2.15%202.282v.002ZM3.085%205.34v-.885c0-.774.315-1.142%201.004-1.19h1.38c1.183%200%201.881.738%201.881%201.974%200%20.941-.486%202.04-1.85%202.04H3.073l.012-1.939Zm6.142%203.355-.488-.286.426-.378c.497-.444%201.325-1.442%201.325-3.164%200-2.638-1.962-4.34-4.997-4.34H1.63C.728.562.01%201.328%200%202.269v14.967h5.561c3.376%200%205.555-1.916%205.555-4.882%200-1.596-.704-2.963-1.887-3.657l-.003-.001ZM128%204.946a4.747%204.747%200%200%200-3.7%201.797l-.25.316-.195-.354c-.64-1.166-1.738-1.759-3.265-1.759-1.603%200-2.677.896-3.176%201.428l-.327.355-.14-.467c-.182-.672-.778-1.04-1.68-1.04h-1.45l-.014%2012.068h3.29v-5.327c.003-.475.061-.95.175-1.411.315-1.288%201.178-2.674%202.63-2.534.894.087%201.333.78%201.333%202.118v7.154h3.314v-5.327c-.012-.492.05-.984.186-1.457.28-1.23%201.168-2.49%202.569-2.49%201.014%200%201.388.575%201.388%202.12v5.39c0%201.218.543%201.764%201.761%201.764h1.548L132%209.586c0-3.08-1.353-4.64-4.013-4.64H128ZM98.038%2013.1c-.01.014-1.426%201.508-3.291%201.508-1.7%200-3.415-1.045-3.415-3.374%200-2.013%201.33-3.42%203.236-3.42.618%200%201.322.22%201.432.595l.014.063c.145.529.627.894%201.174.891l1.817.003v-1.58c0-2.082-2.646-2.838-4.424-2.838-3.806%200-6.567%202.654-6.567%206.311s2.73%206.306%206.497%206.306c3.267%200%205.03-2.152%205.06-2.173l.096-.118-1.428-2.373-.189.2-.012-.001Z'/%3e%3c/svg%3e";

const CustomerBg10 = "" + __buildAssetsURL("customer-bg-10.sil2KdII.png");

const _imports_0 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIAEAAQAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQMGBwECAP/aAAgBAQAAAADawYGRQgwBHlCq+v6OLimqDlPISXjulhnmsZrPLVqLObemMguD3/zR2GrsscGuCt9nnLlldhYLdCSUX//EABgBAAMBAQAAAAAAAAAAAAAAAAACBAMB/9oACgICEAMQAAAA407suorSbubz6JPWHUXY4yTW/wD/xAAkEAACAwABBAMBAAMAAAAAAAACAwEEBQYAERITBxQhIhAjJf/aAAgBAQABDAD9gYEY7RcqCxcnE9isvCKwSzx7osKIBCWREgay7wBjPWfH/OiYLuD1RMeLCiY0GsD1QMSczokPiXn26dyCl62RJz3saYWUiVdRNbsclnjeQ23qAXt4L8g1OWEyvITU0qtuFU/QRR7WakNYyAKJ6sLi2xQJtFBNeJ/x+F0+qbYMRHtOjd2FaUhhrSN+nxvS0roXeQ326rtLgSbtsL9WW51/AjUrZj1aWqdtpNIBlcwUDbsMVQ81GXlWyWDdjz85GMRcgRhEx1bySzrpwM93D9+pcDuVdddSbh7Ps+4Aqp02FtaVCY/0nxkCUl3nJTp8VF9Nsr/mZSuJCfH9iOuRlQjSro9ifuaMWJfMrBplUG2ddBNGZPkmvZwdbAsoaULytWjo1gmm1UMssiarf8aV0M3Ms3WzPhVOzOum4srN58Z7bFcDaIB1XoOAZlnq65Je138krfdz2oQLjzgraz2Gu3i7FPZz67BegnWrSadZliwyAVzLmFzXrvSDyRQ+M+7qlrSMoh25eOnjW7I/pcbt279NCCMLLkpbZQdazTWwd+2kFnQWyDbTtFXdCwKYn5M1bMWUZ6TiEvKzbj0Vg8i4pcTxtxpMCOtzjm2fRqV01HosF8W6a7Wm7wYpXVDTSzkegSVS1XN+OqO4FxMesvcyvZse6PFn/8QALBAAAgEEAQEIAQQDAAAAAAAAAQIDABESIUEEEyIxMlFhcYEQFDORsUKSof/aAAgBAQANPwClORFqDDng0B67oeIBp2d4/ZCxKj+KbwqM3IBtda5BpV3qktGkQ1m52PrVzQ1FGBdZX9A9QjIR9rkJE9VNQqAd7I4b7sfsGlaxPAoMR86oit2Io9OFkmluQig6+9mo/JCP2oj8aFA3EnSyAFj8a3WA/TdT/kUBOSN7gkf7VfzA3ype8WFFb1auucZcYIgq9girjr23RF0jxW9vsXqRB1cbW0t9MP5390F2EoJoGgLfho3Kpl3wLf0ca2A6uBh8A+NB/OXs49go1UrSQypfuuCFNnHI7prHvwZDND7rWB/EETSH6FN1P6jqnAylkJ8fDi2gOBQJazkhqBuqlhocH0rp4TJApGQc8AEaJ2a/bVIBbEHdib7tjUkSs8QfYNt6qMXZjQJJij0XUeGVSYxYA+QeJqKFmUHlrapII5HZWADg3Fdme3UvvZ4Hra5FQz4LfnRANRqCpB2ANUqdrIPVt1Ktj7WvupiC7A3ZCNXtyKmOTDK4C+9W0Gtk6g1eOGSdBpCAf+XvUtzfjtBVxGAf7+Oa/8QAHhEAAgICAgMAAAAAAAAAAAAAAAECEQMSISIQEzH/2gAIAQIBAT8AMmfWWqVshl2lrJUyymxpuTI3Fo1fi1PsVUXIw5vYjJNt0iPPwUeaY4a9Uf/EAB4RAAICAgIDAAAAAAAAAAAAAAABAgMREiExECJB/9oACAEDAQE/ABQyOPhkYrhk4rsydmHX6mdpqJdTpyiipKOzJ5T5JP6iuW8cn//Z";

const _imports_1 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIAEAAQAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAEBgcDBQAB/9oACAEBAAAAADSvq2BYyMlgWW+pGdCEAAkXTaw6J7QdCT++NauK1ZIE1bjqQouA09nfds/R9G0HouRhbBM5/wCyaisnJO//xAAYAQADAQEAAAAAAAAAAAAAAAAAAgMBBP/aAAoCAhADEAAAANDVdMdXc3lLzWoKvTKNnW0v/8QALxAAAgEDAwIFBAIBBQAAAAAAAQIDAAQFBhESIUETFCIyYQcVMVEzgXEWQ1Khsf/aAAgBAQABPwBw63c3huPcd1PekfeH1Lxq7vLbHoLi7mSKJAPU52rLfVdm3t8RZxGEf7lwTu39CrX6n3cUoa7sbZk39QjYqa0zqOwzeES5sJuQA2dG6Mh+ayNgbnwbiA7zj3gjfde9YWKeykvbApJcQ8ucUrdRs3b+quMfBNI7ceLb/kU0XCMqeoArX2aF/m/KQSnwbUcNuxfua0toa9zr+JdN5a1/5Fd2eofpppuO2EbW8zN3kMp3rDYFtG6ngW0uXkx9/G8YVz1Rh6gKbOR2/h9OAC7MxWsnnJsFDbtEglgml936BpkRi5DbEVMoMJqXBrHru9gmHOG2Z7nj3ce8D/uptQ5ODgbTItECgcRWxHo/St6a/wBXXqaZScqTdsWi3UAndRuT+qsNX/dHsI8hNEWgu0bxxFw26EbN1IrJWs8uJtTb8TznVXBHasvYq1hCJV5NEVdUHemxUxYsQOvxX2k8OMg2J/Rq/tBYauHmgpEgliDsfUQfVWV07Hb3hEORi3I6BujhalXDZXRCYa1vCtzBLzjkmHWWTv371pLTeVurhZZzALSGdfE3fkfT1IqAMcfb7Dc+ITTZVHuYri8cxAbxgEdPzQfkN2XamljJ2719VrQPpuK/ghPj21wGLgdeGzVhVx+Tv3vbzeSdAp4n2kAbVaWGmr2FoLWDHwz8GJmHMtH8hW6V9Nca3i5ARSO+OSViHY+9zsAP6X/0U0PlrNSGKou7VPjZ7mRInTnG7cgrVJcoAF5iri+tLaISTTxRJ3eRwoq61Nc6h81wCLiS5SBSAWk49C5q7xl7hMk13jUDRk/xGtO2Wps/O9tDjobS3n9Et1KgXivf5JrFY/HYHDw4+1KrFENiSerHux+TU8vOOBCAYdgSakNh4ysZYV7bFhWW+oUMaD7ZDI8238k42C/1WYzWRzLK9/dyT8PaG6Af4FaWzkdspx1weIZ+cT/J7U1ob6HnH+R+azmZvdM4fEGzaNHmdvF3XlyAArA6shzcnk7pEium3KFPY/x/mtQ5QeSix8V/Fav4Q3dqyuNvJJVH3xJtjuuz0lxyXY/kUzt2IPwafkR1QVpzXFzhh4V3bG8g223D7SCtQaoh1JNbeFbywpbxkKJCN9zWnFeXUWORCd/MIenwa1DpbK5K6urvnOem8CI3QVcYfPW0IefGXQ7EovKv/8QAIBEAAgIBAwUAAAAAAAAAAAAAAAECERADEhMhIjFBUf/aAAgBAgEBPwAbLs6Jlog4X3i46ZqeRIXzDVvE4e0QVRIbKo//xAAbEQADAQEAAwAAAAAAAAAAAAAAARECEBIhIv/aAAgBAwEBPwASo8zkNZ1PlmvMzxJymtFglDG56Zt10aZ//9k=";

const _sfc_main$1 = {
  name: "CustomersList",
  components: {
    Particles,
    Highlighter,
    HighlighterItem
  },
  setup() {
    const items = [
      {
        name: "Customer name",
        img: CustomerImg01,
        bg: CustomerBg01,
        link: "/customer"
      },
      {
        name: "Customer name",
        img: CustomerImg02,
        bg: CustomerBg02,
        link: "/customer"
      },
      {
        name: "Customer name",
        img: CustomerImg03,
        bg: CustomerBg03,
        link: "/customer"
      },
      {
        name: "Customer name",
        img: CustomerImg04,
        bg: CustomerBg04,
        link: "/customer"
      },
      {
        name: "Customer name",
        img: CustomerImg05,
        bg: CustomerBg05,
        link: "/customer"
      },
      {
        name: "Customer name",
        img: CustomerImg06,
        bg: CustomerBg06,
        link: "/customer"
      },
      {
        name: "Customer name",
        img: CustomerImg07,
        bg: CustomerBg07,
        link: "/customer"
      },
      {
        name: "Customer name",
        img: CustomerImg08,
        bg: CustomerBg08,
        link: "/customer"
      },
      {
        name: "Customer name",
        img: CustomerImg09,
        bg: CustomerBg09,
        link: "/customer"
      },
      {
        name: "Customer name",
        img: CustomerImg10,
        bg: CustomerBg10,
        link: "/customer"
      }
    ];
    return {
      items
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Highlighter = resolveComponent("Highlighter");
  const _component_router_link = resolveComponent("router-link");
  const _component_HighlighterItem = resolveComponent("HighlighterItem");
  const _component_Particles = resolveComponent("Particles");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[352px] mx-auto sm:max-w-[728px] lg:max-w-none pb-12 md:pb-20" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Highlighter, { class: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 group [&_*:nth-child(n+5):not(:nth-child(n+12))]:order-1 [&_*:nth-child(n+10):not(:nth-child(n+11))]:order-2!" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.items, (item) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_router_link, {
            to: item.link
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_HighlighterItem, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden"${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_Particles, {
                        class: "absolute inset-0 -z-10",
                        quantity: 3
                      }, null, _parent4, _scopeId3));
                      _push4(`<div class="flex items-center justify-center"${_scopeId3}><img class="w-full h-full aspect-video object-cover"${ssrRenderAttr("src", item.bg)} width="352" height="198" alt="Customer Background" aria-hidden="true"${_scopeId3}><img class="absolute"${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", item.name)}${_scopeId3}></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden" }, [
                          createVNode(_component_Particles, {
                            class: "absolute inset-0 -z-10",
                            quantity: 3
                          }),
                          createVNode("div", { class: "flex items-center justify-center" }, [
                            createVNode("img", {
                              class: "w-full h-full aspect-video object-cover",
                              src: item.bg,
                              width: "352",
                              height: "198",
                              alt: "Customer Background",
                              "aria-hidden": "true"
                            }, null, 8, ["src"]),
                            createVNode("img", {
                              class: "absolute",
                              src: item.img,
                              alt: item.name
                            }, null, 8, ["src", "alt"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_HighlighterItem, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden" }, [
                        createVNode(_component_Particles, {
                          class: "absolute inset-0 -z-10",
                          quantity: 3
                        }),
                        createVNode("div", { class: "flex items-center justify-center" }, [
                          createVNode("img", {
                            class: "w-full h-full aspect-video object-cover",
                            src: item.bg,
                            width: "352",
                            height: "198",
                            alt: "Customer Background",
                            "aria-hidden": "true"
                          }, null, 8, ["src"]),
                          createVNode("img", {
                            class: "absolute",
                            src: item.img,
                            alt: item.name
                          }, null, 8, ["src", "alt"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--><div class="flex flex-col items-center justify-center text-center p-4"${_scopeId}><p class="font-medium bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3"${_scopeId}><span class="line-clamp-4"${_scopeId}> “We struggled to bring all our conversations into one place until we found Stellar. The UI is very clean and we love the integration with Spark.” </span></p><div class="inline-flex mb-2"${_scopeId}><img class="rounded-full"${ssrRenderAttr("src", _imports_0)} width="32" height="32" alt="Customer Avatar 01"${_scopeId}></div><div class="text-sm font-medium text-slate-300"${_scopeId}> Mike Hunt <span class="text-slate-700"${_scopeId}>-</span> <a class="text-purple-500 hover:underline" href="#0"${_scopeId}>Thunderbolt</a></div></div><div class="flex flex-col items-center justify-center text-center p-4"${_scopeId}><p class="font-medium bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3"${_scopeId}><span class="line-clamp-4"${_scopeId}> “We struggled to bring all our conversations into one place until we found Stellar. The UI is very clean and we love the integration with Spark.” </span></p><div class="inline-flex mb-2"${_scopeId}><img class="rounded-full"${ssrRenderAttr("src", _imports_1)} width="32" height="32" alt="Customer Avatar 02"${_scopeId}></div><div class="text-sm font-medium text-slate-300"${_scopeId}> Mirko Mitt <span class="text-slate-700"${_scopeId}>-</span> <a class="text-purple-500 hover:underline" href="#0"${_scopeId}>Mildrink</a></div></div>`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.items, (item) => {
            return openBlock(), createBlock("div", null, [
              createVNode(_component_router_link, {
                to: item.link
              }, {
                default: withCtx(() => [
                  createVNode(_component_HighlighterItem, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden" }, [
                        createVNode(_component_Particles, {
                          class: "absolute inset-0 -z-10",
                          quantity: 3
                        }),
                        createVNode("div", { class: "flex items-center justify-center" }, [
                          createVNode("img", {
                            class: "w-full h-full aspect-video object-cover",
                            src: item.bg,
                            width: "352",
                            height: "198",
                            alt: "Customer Background",
                            "aria-hidden": "true"
                          }, null, 8, ["src"]),
                          createVNode("img", {
                            class: "absolute",
                            src: item.img,
                            alt: item.name
                          }, null, 8, ["src", "alt"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["to"])
            ]);
          }), 256)),
          createVNode("div", { class: "flex flex-col items-center justify-center text-center p-4" }, [
            createVNode("p", { class: "font-medium bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3" }, [
              createVNode("span", { class: "line-clamp-4" }, " “We struggled to bring all our conversations into one place until we found Stellar. The UI is very clean and we love the integration with Spark.” ")
            ]),
            createVNode("div", { class: "inline-flex mb-2" }, [
              createVNode("img", {
                class: "rounded-full",
                src: _imports_0,
                width: "32",
                height: "32",
                alt: "Customer Avatar 01"
              })
            ]),
            createVNode("div", { class: "text-sm font-medium text-slate-300" }, [
              createTextVNode(" Mike Hunt "),
              createVNode("span", { class: "text-slate-700" }, "-"),
              createTextVNode(),
              createVNode("a", {
                class: "text-purple-500 hover:underline",
                href: "#0"
              }, "Thunderbolt")
            ])
          ]),
          createVNode("div", { class: "flex flex-col items-center justify-center text-center p-4" }, [
            createVNode("p", { class: "font-medium bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3" }, [
              createVNode("span", { class: "line-clamp-4" }, " “We struggled to bring all our conversations into one place until we found Stellar. The UI is very clean and we love the integration with Spark.” ")
            ]),
            createVNode("div", { class: "inline-flex mb-2" }, [
              createVNode("img", {
                class: "rounded-full",
                src: _imports_1,
                width: "32",
                height: "32",
                alt: "Customer Avatar 02"
              })
            ]),
            createVNode("div", { class: "text-sm font-medium text-slate-300" }, [
              createTextVNode(" Mirko Mitt "),
              createVNode("span", { class: "text-slate-700" }, "-"),
              createTextVNode(),
              createVNode("a", {
                class: "text-purple-500 hover:underline",
                href: "#0"
              }, "Mildrink")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/CustomersList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CustomersList = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "StellarCustomersList" });

const _sfc_main = {
  __name: "Customers",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cutomers-page" }, _attrs))}><section class="relative"><div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true"><div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div><div class="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div></div>`);
      _push(ssrRenderComponent(Particles, {
        class: "absolute inset-0 h-96 -z-10",
        quantity: 15
      }, null, _parent));
      _push(`<div class="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true"><img${ssrRenderAttr("src", _imports_0$1)} class="max-w-none" width="1440" height="427" alt="Page Illustration"></div><div class="max-w-6xl mx-auto px-4 sm:px-6"><div class="pt-32 md:pt-40"><div class="text-center pb-12 md:pb-20"><div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">${ssrInterpolate(_ctx.$t("customers.tagline"))}</div><h1 class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">${ssrInterpolate(_ctx.$t("customers.title"))}</h1><div class="max-w-3xl mx-auto"><p class="text-lg text-slate-400">${ssrInterpolate(_ctx.$t("customers.description"))}</p></div></div>`);
      _push(ssrRenderComponent(CustomersList, null, null, _parent));
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(Cta, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Customers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Customers.vue.mjs.map
