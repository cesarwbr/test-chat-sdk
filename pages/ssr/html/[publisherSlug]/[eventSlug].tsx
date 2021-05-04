import { FC } from "react";
import { GetServerSideProps } from "next";

const SSR: FC<{ html: string }> = ({ html }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style global jsx>{`
        body {
          padding: 0;
          margin: 0;
          font-family: "Austin News Text Roman", Georgia, Times, serif;
          line-height: 25px;
        }

        blockquote {
          background-image: url(https://www.telegraph.co.uk/etc/designs/telegraph/core/clientlibs/tmgchannels/_base/img/borders/comment__news.png);
          line-height: 25px;
          background-position: -1088px 0;
          background-repeat: repeat-y;
          color: #333;
          font-family: "Austin News Text Roman", Georgia, Times, serif;
          margin: 0 0 1.5rem;
          padding: 0 2.5rem 0 2.6rem;
        }

        .summary--container {
          padding-bottom: 0 !important;
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { publisherSlug, eventSlug } = context.params;

  const data = await fetch(
    `https://sandbox.arena.im/ssr/html/${publisherSlug}/${eventSlug}`,
    {
      headers: {
        "user-agent": context.req.headers["user-agent"],
      },
    }
  );

  const style = `
    <style data-styled="true" data-styled-version="5.2.1">.gGBhKH{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;height:100%;}/*!sc*/
  data-styled.g1[id="style__ArenaLive-hCjkRE"]{content:"gGBhKH,"}/*!sc*/
  .jmGOTh{margin:0;padding:0;position:relative;width:100%;height:100%;overflow:hidden;display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:transparent;overflow-y:visible;overflow:visible;height:auto;}/*!sc*/
  @media screen and (max-width:720px){.jmGOTh{overflow:scroll;-webkit-overflow-scrolling:touch;}}/*!sc*/
  data-styled.g2[id="style__LiveMain-cUzLWy"]{content:"jmGOTh,"}/*!sc*/
  .cLlkrq{margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:auto;}/*!sc*/
  data-styled.g5[id="style__LiveMainLive-gMRRVI"]{content:"cLlkrq,"}/*!sc*/
  .pHlgz{display:block;position:relative;width:100%;overflow:scroll;-webkit-overflow-scrolling:touch;overflow:visible;}/*!sc*/
  @media screen and (max-width:720px){.pHlgz{overflow:visible;}}/*!sc*/
  data-styled.g6[id="style__LivePages-dWJiOd"]{content:"pHlgz,"}/*!sc*/
  .fkPNnP{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-transition:left 0.6s ease-in-out;transition:left 0.6s ease-in-out;}/*!sc*/
  data-styled.g7[id="style__LivePagesItem-ZbAhk"]{content:"fkPNnP,"}/*!sc*/
  .idFYTr{overflow:visible;margin:0;padding:0;width:100%;height:100%;}/*!sc*/
  data-styled.g8[id="style__LiveMainLivePbp-lcBmEe"]{content:"idFYTr,"}/*!sc*/
  .hgYrUp{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}/*!sc*/
  data-styled.g9[id="style__LivePbp-icVXDT"]{content:"hgYrUp,"}/*!sc*/
  .eFdciH{background-color:transparent;width:100%;max-width:700px;margin:0 auto;}/*!sc*/
  data-styled.g10[id="style__LivePbpContainer-ikuBdA"]{content:"eFdciH,"}/*!sc*/
  .igHvAe{position:relative;border-bottom:1px solid #d8dce9;border-left:1px solid #d8dce9;padding:28px 13px 16px;margin-left:70px;margin-top:-10px;}/*!sc*/
  @media screen and (max-width:720px){.igHvAe{margin-top:0;}}/*!sc*/
  @media screen and (max-width:450px){.igHvAe{margin-left:18px;}}/*!sc*/
  .igHvAe .fb-post{width:100% !important;max-width:100% !important;}/*!sc*/
  .igHvAe > div{position:static !important;}/*!sc*/
  .igHvAe .fb-post > span{width:100% !important;max-width:100% !important;}/*!sc*/
  .igHvAe .fb-post > span > iframe{width:1px !important;min-width:100% !important;border-radius:5px;}/*!sc*/
  data-styled.g11[id="style__LivePlayByPlayBodyContainer-bmaeUx"]{content:"igHvAe,"}/*!sc*/
  .fdKDSk{font-weight:600;width:100%;font-size:20px;-webkit-text-decoration:none !important;text-decoration:none !important;text-transform:none !important;word-break:break-word;color:#d10a11;}/*!sc*/
  data-styled.g39[id="style__LiveMessageTitle-dSYABm"]{content:"fdKDSk,"}/*!sc*/
  .bKXxbj{font-size:16px;padding:15px 7px 0;margin:0;}/*!sc*/
  .bKXxbj p{margin:0 !important;float:none !important;}/*!sc*/
  .bKXxbj img{display:block !important;max-width:100% !important;margin:0 !important;}/*!sc*/
  data-styled.g40[id="style__LiveMessageTextWithLink-MuGhR"]{content:"bKXxbj,"}/*!sc*/
  .YlrZj{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;left:-76px;width:74px;margin:0;}/*!sc*/
  @media screen and (max-width:450px){.YlrZj{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;width:auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:24px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}}/*!sc*/
  data-styled.g47[id="style__LiveMessageActionContainer-jYkoSH"]{content:"YlrZj,"}/*!sc*/
  .jhcHUt{width:50px;overflow:visible;cursor:pointer;}/*!sc*/
  @media screen and (max-width:450px){.jhcHUt{width:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}/*!sc*/
  data-styled.g49[id="style__LiveMessageActionPeriodTime-jXjgcE"]{content:"jhcHUt,"}/*!sc*/
  .dQDeYB{width:50px;font-size:11px;font-weight:500;line-height:1.23;text-align:center;color:#9b9b9b;}/*!sc*/
  .dQDeYB > div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:12px;line-height:20px;}/*!sc*/
  .dQDeYB > div > span{font-size:11px;}/*!sc*/
  @media screen and (max-width:450px){.dQDeYB{width:auto;}}/*!sc*/
  data-styled.g50[id="style__LiveMessageActionDate-dZWAok"]{content:"dQDeYB,"}/*!sc*/
  .eGBCPE{width:24px;height:24px;}/*!sc*/
  data-styled.g57[id="style__LiveMessageActionIcon-gXZNeD"]{content:"eGBCPE,"}/*!sc*/
  .jUVnau{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:10px;}/*!sc*/
  data-styled.g60[id="style__LiveMessageReactionsCtas-eVJjux"]{content:"jUVnau,"}/*!sc*/
  .bUEJEL{padding:8px;position:relative;max-width:600px;margin:0;}/*!sc*/
  .eKgCHy{padding:18px 8px;position:relative;max-width:600px;margin:0;}/*!sc*/
  data-styled.g114[id="style__TimeLineLiveMessageWrapper-cmMSZK"]{content:"bUEJEL,eKgCHy,"}/*!sc*/
  .cbLaJh{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}/*!sc*/
  data-styled.g115[id="style__TimeLineLiveMessageTimeTitle-gngBLY"]{content:"cbLaJh,"}/*!sc*/
  .jYuux{margin:0;}/*!sc*/
  @media screen and (max-width:450px){.jYuux{margin-top:25px;padding:2px 0px !important;}}/*!sc*/
  data-styled.g116[id="style__TimeLineContentWrapper-bGYfq"]{content:"jYuux,"}/*!sc*/
  .lhuCeT{border-bottom:1px solid #d8dce9;max-width:700px;width:100%;margin:20px auto;}/*!sc*/
  .lhuCeT + .live-pbp--container > .live-pbp--messages{margin-top:-20px;padding-top:20px;}/*!sc*/
  data-styled.g161[id="style__SummaryWrapper-gRVvxo"]{content:"lhuCeT,"}/*!sc*/
  .bIWERE{margin-left:60px;padding-top:50px;padding-right:30px;padding-bottom:50px;}/*!sc*/
  @media screen and (max-width:450px){.bIWERE{margin-left:10px;padding-right:10px;padding-top:10px;padding-bottom:20px;}}/*!sc*/
  .bIWERE .live-message--content--wrapper{margin-top:0;}/*!sc*/
  data-styled.g162[id="style__SummaryContainer-doWdKE"]{content:"bIWERE,"}/*!sc*/
  .dPusGS{font-size:20px;font-weight:900;line-height:1;color:#d10a11;margin-bottom:15px;text-transform:uppercase;}/*!sc*/
  @media screen and (max-width:450px){.dPusGS{margin-bottom:5px;text-align:center;}}/*!sc*/
  data-styled.g163[id="style__SummaryTitle-dqBtJT"]{content:"dPusGS,"}/*!sc*/
  .hYupDf{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;margin:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-left:70px;padding-top:8px;padding-bottom:40px;-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
  data-styled.g164[id="style__LivePbpPoweredBy-iEGNTW"]{content:"hYupDf,"}/*!sc*/
  .fbSCQg{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;color:#656c7a;font-style:normal;font-weight:normal;line-height:12px;font-size:13px;text-align:right;-webkit-letter-spacing:-0.05em;-moz-letter-spacing:-0.05em;-ms-letter-spacing:-0.05em;letter-spacing:-0.05em;mix-blend-mode:normal;opacity:0.75;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}/*!sc*/
  data-styled.g165[id="style__LivePbpPoweredByText-ectezf"]{content:"fbSCQg,"}/*!sc*/
  .hwyJam{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:18px;height:18px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#8c919c;border-radius:50%;}/*!sc*/
  data-styled.g166[id="style__LivePbpPoweredByTextIconWrapper-khCMNv"]{content:"hwyJam,"}/*!sc*/
  .kzGwYr{background:url(http://localhost:3000/public/imgs/logo-white-small.png) center center/contain no-repeat;width:9px;height:9px;}/*!sc*/
  data-styled.g167[id="style__LivePbpPoweredByTextIcon-jBaPdM"]{content:"kzGwYr,"}/*!sc*/
  .jdlvGL{margin:0 0 0 5px;}/*!sc*/
  data-styled.g168[id="style__LivePbpPoweredByTextSpan-jSebJj"]{content:"jdlvGL,"}/*!sc*/
  .jdMxpZ{margin:0;}/*!sc*/
  @media screen and (max-width:450px){.jdMxpZ{display:none;}}/*!sc*/
  data-styled.g169[id="style__LivePbpPoweredByLogo-hHlJxt"]{content:"jdMxpZ,"}/*!sc*/
  .dbXSpg{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}/*!sc*/
  data-styled.g170[id="style__LivePbpPoweredByLogoIconWrapper-bdfNAF"]{content:"dbXSpg,"}/*!sc*/
  .lgsBEn{background:url(http://localhost:3000/public/imgs/arena_im-logo.png) no-repeat;width:65px;height:10px;}/*!sc*/
  data-styled.g171[id="style__LivePbpPoweredByLogoIcon-bmdQYC"]{content:"lgsBEn,"}/*!sc*/
  .jAcqEK{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:10px 20px;font-size:12px;font-weight:600;color:#9b9b9b;font-weight:400;border-bottom:1px solid #ececec;margin:0;}/*!sc*/
  data-styled.g189[id="style__LiveStatusBarContainer-liRBeb"]{content:"jAcqEK,"}/*!sc*/
  .exJbit{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;}/*!sc*/
  data-styled.g190[id="style__LiveStatusBarUpdating-eqGooA"]{content:"exJbit,"}/*!sc*/
  .kXxTWA{background:#f00000 !important;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:white !important;font-size:13px;font-weight:500;border-radius:4px;-webkit-animation:blinker 1.5s cubic-bezier(0.5,0,1,1) infinite alternate;animation:blinker 1.5s cubic-bezier(0.5,0,1,1) infinite alternate;padding:1px 5px;margin-right:10px;}/*!sc*/
  data-styled.g191[id="style__LiveStatusBarUpdatingWrapper-dSLYpv"]{content:"kXxTWA,"}/*!sc*/
  .bZfYXf{font-size:34px;height:12px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-left:10px;cursor:pointer;width:21px;margin:0;}/*!sc*/
  data-styled.g192[id="style__LiveStatusBarSoundAlert-kBGPwd"]{content:"bZfYXf,"}/*!sc*/
  .XRyzv{background:url(http://localhost:3000/public/imgs/icon_sound_turn-up.svg) center center / contain no-repeat;width:14px;height:13px;color:#0a91e6;}/*!sc*/
  data-styled.g193[id="style__LiveStatusBarSoundAlertVolume-dzvhgB"]{content:"XRyzv,"}/*!sc*/
  .iYSAND{font-size:12px;margin:0;color:#000;}/*!sc*/
  .iYSAND > span{font-size:12px;}/*!sc*/
  data-styled.g194[id="style__LiveStatusBarLastUpdate-ctfzTP"]{content:"iYSAND,"}/*!sc*/
  *{box-sizing:border-box;}/*!sc*/
  data-styled.g198[id="sc-global-bGRxFM1"]{content:"sc-global-bGRxFM1,"}/*!sc*/
  </style>
    `;

  const html = await data.text();

  return { props: { html: html + style } };
};

export default SSR;
