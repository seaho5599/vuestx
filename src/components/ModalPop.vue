<template>
  <div class="modal-wrap">
    <div class="modal-main">
      <div class="modal-img">
        <img :src="'./modalcode.png'" alt="" />
      </div>
      <h1>STX건설 클론코딩</h1>
      <p>
        이 사이트는 <b>스터디용</b>으로 제작되었으며 리소스는
        <strong>원저작자</strong>에게 있습니다. <br />
        해당 사이트 관련 문제 사항이 있으시면 연락해주시면 삭제하겠습니다.<br />
        본 사이트는 Chrome 에 최적화되어 있습니다.
      </p>
      <div class="modal-box">
        <span> <em>1.</em>파비콘을 제작 및 추가하였습니다.</span>
        <span> <em>1.</em>vue버전으로 제작하였습니다.</span>
        <!-- <span> <em>4.</em></span> -->
      </div>

      <button class="modal-close"><i class="fas fa-times"></i></button>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import $ from "jquery";
export default {
  setup() {
    onMounted(() => {
      $(document).ready(function () {
        // 안내창 기능
        // 추가기능 :  스크롤바 없에기
        $("html").css("overflow", "hiden");
        let modalWrap = $(".modal-wrap");
        let modalClose = $(".modal-close");
        modalClose.click(function () {
          modalWrap.stop().fadeOut(100);
          // 추가기능:  스크롤바 살리기
          $("html").css("overflow", "auto");
        });

        let modalMain = $(".modal-main");
        // 내용배경 클릭
        modalMain.click(function (event) {
          event.stopPropagation();
        });
        // 전체 배경 클릭
        modalWrap.click(function () {
          modalWrap.stop().fadeOut(100);
          $("html").css("overflow", "auto");
        });
      });
    });

    return {};
  },
};
</script>

<style scoped>
/* 안내창 */
.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99999;
}

.modal-main {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  height: 450px;
  background: #fff;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0px 0px 7px 0px rgba(0 0 0 / 70%);
}
.modal-img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 12px 22px 32px 6px rgb(94 94 105 / 25%),
    0 8px 16px -8px rgb(94 94 105 / 30%), 0 -6px 16px -6px rgb(94 94 105 / 3%);
}
.modal-img img {
  display: block;
  width: 70%;
  height: 70%;
}
.modal-main h1 {
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  color: #333;
  padding: 10px 0;
}

.modal-main p {
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  line-height: 1.8;
  margin-bottom: 20px;
}

.modal-main b {
  font-weight: 600;
  text-decoration: underline;
  color: #ed1c24;
}

.modal-main strong {
  font-weight: 600;
  text-decoration: underline;
  color: #ed1c24;
}
.modal-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 230px;
  margin: 0 auto;
  background: #2f3346;
  border-radius: 20px;
  padding-left: 10px;
}
.modal-main span {
  display: block;
  font-size: 16px;
  font-weight: 400;
  color: #a96e39;
  line-height: 1.8;
  padding: 5px 10px;
  letter-spacing: 0.5px;
}
.modal-main span em {
  color: #7084a0;
  padding-right: 5px;
}
.modal-close {
  position: absolute;
  right: 20px;
  top: 20px;
  border: 0;
  cursor: pointer;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: #555;
  background: #727792;
  /* transition: transform 0.4s; */
}
.modal-close i {
  font-size: 18px;
  text-align: center;
  line-height: 25px;
  color: #e5e5e6;
}

.modal-close:hover {
  /* transform: rotate(90deg); */
  font-size: 21px;
}

.modal-close:active {
  font-size: 22px;
}
</style>
