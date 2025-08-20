<script setup lang="ts">
import ChatIcon from '~/assets/images/icon/chat.svg'
import WorkShop from '~/assets/images/icon/workshop.svg'
import Video from '~/assets/images/icon/video.svg'
import Play from '~/assets/images/icon/play.svg'
import Multimedia from '~/assets/images/icon/multimedia.svg'
import CirclePlay from '~/assets/images/icon/circle-play.svg'
import Noti from '~/assets/images/icon/notification.svg'
import Mail from '~/assets/images/icon/mail.svg'
import Calendar from '~/assets/images/icon/calendar.svg'
import User from '~/assets/images/icon/user.svg'
import Dart from '~/assets/images/icon/dart.svg'
import Home from '~/assets/images/icon/home.svg'
import Wallet from '~/assets/images/icon/wallet.svg'
import Chart from '~/assets/images/icon/chart.svg'
import Exit from '~/assets/images/icon/exit.svg'

import profileImg from '~/assets/images/profile/profile.jpg'
import avatarBorder from '~/assets/images/icon/avatar_border.png'

import { ref } from 'vue';

const showForm = ref(false);
const dropdownOpen = ref(false);
const activeItem = ref('')     // store the id of the clicked item

function setActive(id: string) {
  activeItem.value = id
}
const activeNav = ref('') // store which nav is active

function setActiveNav(id: string) {
  activeNav.value = id
  console.log('Dropdown clicked! Current state:', activeNav.value);
}

const activeDropdown = ref('')

function toggleDropdown1() {
  dropdownOpen.value = !dropdownOpen.value;
  console.log('Dropdown clicked! Current state:', dropdownOpen.value);
}
// function toggleDropdown(nav: string) {
//   activeNav.value = nav
//   activeDropdown.value = nav
// }
function toggleDropdown(nav: string) {
  if (activeDropdown.value === nav) {
    activeDropdown.value = '';
    activeNav.value = '';
  } else {
    activeDropdown.value = nav;
    activeNav.value = nav;
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<template>
  <header class="text-white flex items-center justify-between pt-0 bg-black p-0">
    <table class="table-auto border-collapse w-full h-[107px] border-spacing-0">
      <tbody>
        <tr>
          <td rowspan="2" class="w-[488px] h-[107px] align-middle text-center bg-[#F8E889] p-0">
            <div
              class="font-bold font-inter text-white text-right leading-none overflow-hidden p-4 bg-black rounded-tr-[60px]">
              <span class="text-[90px] inline-block leading-none mr-1 font-[400]">LOGO</span>
            </div>
          </td>
          <td class="text-center p-2 m-0 bg-gradient-to-r from-[#F8E889] to-[#E4B764] h-[60px]">
            <div
              class="flex items-center justify-left gap-x-3 uppercase text-black font-roboto font-[400] text-[16px] leading-none overflow-hidden h-full">
              <div class="flex items-center gap-x-8">
                <!-- Nav 1 -->
                <div 
                  id="nav1" 
                  @click="toggleDropdown('nav1')" 
                  :class="[
                    'cursor-pointer h-[40px] rounded-[20px] justify-center flex items-center p-3',
                    activeNav === 'nav1' ? 'bg-black text-white' : 'text-black'
                  ]"
                >
                  <span>lịch trực tiếp</span>
                </div>
                <!-- Nav 2 -->
                <div 
                id="nav2" 
                @click="setActiveNav('nav2')" 
                :class="[
                  'cursor-pointer h-[40px] rounded-[20px] justify-center flex items-center p-3',
                  activeNav === 'nav2' ? 'bg-black text-white' : 'text-black'
                ]">
                  <span>lịch thi đấu</span>
                </div>

                <!-- Nav 3 -->
                <div id="nav3" @click="setActiveNav('nav3')" :class="[
                  'cursor-pointer h-[40px] rounded-[20px] justify-center flex items-center p-3',
                  activeNav === 'nav3' ? 'bg-black text-white' : 'text-black'
                ]">
                  <span>tỷ lệ kèo</span>
                </div>

                <!-- Nav 4 -->
                <div id="nav4" @click="setActiveNav('nav4')" :class="[
                  'cursor-pointer h-[40px] rounded-[20px] justify-center flex items-center p-3',
                  activeNav === 'nav4' ? 'bg-black text-white' : 'text-black'
                ]">
                  <span>kết quả</span>
                </div>

                <!-- Nav 5 -->
                <div id="nav5" @click="setActiveNav('nav5')" :class="[
                  'cursor-pointer h-[40px] rounded-[20px] justify-center flex items-center p-3',
                  activeNav === 'nav5' ? 'bg-black text-white' : 'text-black'
                ]">
                  <span>phòng chat</span>
                </div>

                <!-- Nav 6 -->
                <div id="nav6" @click="setActiveNav('nav6')" :class="[
                  'cursor-pointer h-[40px] rounded-[20px] justify-center flex items-center p-3',
                  activeNav === 'nav6' ? 'bg-black text-white' : 'text-black'
                ]">
                  <span>tin tức</span>
                </div>

              </div>
              <div class="gap-x-2 flex items-center ml-4">
                <button v-if="!showForm" @click="showForm = true"
                  class="bg-white h-[40px] w-[130px] flex items-center justify-center rounded-[20px] uppercase border border-gray-300 hover:border-[#E4B764] hover:text-[#E4B764] active:scale-95 transition-all duration-200 cursor-pointer">
                  đăng ký 1
                </button>
                <button v-if="!showForm" @click="showForm = true"
                  class="h-[40px] w-[130px] flex items-center justify-center rounded-[20px] uppercase bg-gradient-to-t from-[#000000] to-[#5C5C5C] text-white cursor-pointer hover:brightness-110 active:scale-95 transition-all duration-200">
                  <span class="bg-gradient-to-t from-[#E4B764] to-[#F8E889] bg-clip-text text-transparent">
                    đăng nhập 2
                  </span>
                </button>

                <!-- Textbox (initially hidden) -->
                <div v-if="showForm" class="flex gap-x-2">
                  <div
                    class="h-[40px] w-[284px] flex items-center rounded-[20px] uppercase bg-gradient-to-t from-[#000000] to-[#5C5C5C] text-white p-1">
                    <div class="h-[34px] w-[130px] bg-white rounded-[20px] text-black p-1 flex">
                      <div class="flex items-center justify-start flex-1">
                        <!-- <div class="rounded-full bg-red-500 w-[22px] h-[22px] flex items-center justify-center font-[800] pb-[2px]">+</div> -->
                        <img class="w-[20px] h-[20px]" src="../assets/images/icon/coin.png" alt="">
                        <span class="p-1 font-[700] font-roboto">1000</span>
                      </div>
                      <div class="flex items-center justify-end flex-1">
                        <div
                          class="rounded-full bg-red-500 w-[22px] h-[22px] flex items-center justify-center font-[800] pb-[2px] bg-gradient-to-t from-[#E4B764] to-[#F8E889] pb-[5px]">
                          +</div>
                      </div>
                    </div>
                    <span class="inline-flex items-center">
                      <Noti class="w-[30px] h-[30px] text-white" />
                    </span>
                    <span class="inline-flex items-center ml-1">
                      <Mail class="w-[30px] h-[30px] text-white" />
                    </span>
                    <span class="inline-flex items-center ml-1">
                      <Calendar class="w-[30px] h-[30px] text-white" />
                    </span>
                    <div class="relative inline-block">
                      <!-- Profile Avatar -->
                      <div class="relative w-[50px] h-[50px] cursor-pointer" @click="toggleDropdown1">
                        <div
                          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] bg-center bg-no-repeat bg-contain rounded-full"
                          :style="{ backgroundImage: `url(${profileImg})` }"></div>
                        <img class="absolute inset-0 w-full h-full" :src="avatarBorder" alt="Avatar Border" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <transition name="fade">
                <div v-if="dropdownOpen" class="absolute right-0 mt-[50px] sm:mt-[150px] lg:mt-[279px] w-[90vw] max-w-[275px] 
                        bg-white shadow-lg rounded-[20px] z-[999] 
                        translate-x-[-400px] sm:translate-x-[-250px] lg:translate-x-[-257px]">
                  <!-- User -->
                  <div id="user" @click="setActive('user')" :class="[
                    'p-2 flex items-center justify-start text-left mr-40 cursor-pointer w-full',
                    activeItem === 'user' ? 'rounded-[20px] bg-black text-white' : 'rounded'
                  ]">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <User class="w-[24px] h-[24px]" />
                    </span>
                    <span class="text-[16px] text-roboto font-[400]">Trung tâm Tài khoản</span>
                  </div>

                  <!-- Home -->
                  <div id="home" @click="setActive('home')" :class="[
                    'p-2 flex items-center justify-start text-left mr-4 ml-0 cursor-pointer w-full',
                    activeItem === 'home' ? 'rounded-[20px] bg-black text-white' : 'rounded'
                  ]">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Home class="w-[24px] h-[24px]" />
                    </span>
                    <span>Trang cá nhân</span>
                  </div>

                  <!-- Dart -->
                  <div id="dart" @click="setActive('dart')" :class="[
                    'p-2 flex items-center justify-start text-left mr-4 ml-0 cursor-pointer w-full',
                    activeItem === 'dart' ? 'rounded-[20px] bg-black text-white' : 'rounded'
                  ]">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Dart class="w-[24px] h-[24px]" />
                    </span>
                    <span>Nhiệm vụ</span>
                  </div>

                  <!-- Wallet -->
                  <div id="wallet" @click="setActive('wallet')" :class="[
                    'p-2 flex items-center justify-start text-left mr-4 ml-0 cursor-pointer w-full',
                    activeItem === 'wallet' ? 'rounded-[20px] bg-black text-white' : 'rounded'
                  ]">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Wallet class="w-[24px] h-[24px]" />
                    </span>
                    <span>Ví của bạn</span>
                  </div>

                  <!-- Chart -->
                  <div id="chart" @click="setActive('chart')" :class="[
                    'p-2 flex items-center justify-start text-left mr-4 ml-0 cursor-pointer w-full',
                    activeItem === 'chart' ? 'rounded-[20px] bg-black text-white' : 'rounded'
                  ]">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Chart class="w-[24px] h-[24px]" />
                    </span>
                    <span>Lịch sử giao dịch</span>
                  </div>

                  <!-- Exit -->
                  <div id="exit" @click="setActive('exit')" :class="[
                    'p-2 flex items-center justify-start text-left mr-4 ml-0 cursor-pointer w-full',
                    activeItem === 'exit' ? 'rounded-[20px] bg-black text-white' : 'rounded'
                  ]">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Exit class="w-[24px] h-[24px]" />
                    </span>
                    <span>Thoát tài khoản</span>
                  </div>
                </div>
              </transition>
              <!-- Dropdown -->
              <div 
                  v-if="activeDropdown === 'nav1'" 
                  class="absolute left-0 mt-[50px] sm:mt-[150px] lg:mt-[240px] w-[148px] max-w-[275px] 
                        bg-white/80 shadow-lg rounded-[20px] z-[999] 
                        translate-x-[-400px] sm:translate-x-[-250px] lg:translate-x-[497px] backdrop-blur-md"
                >

                  <div id="user" class="p-2 flex items-center justify-start text-left mr-40 cursor-pointer w-full rounded-[25px] bg-white/80 backdrop-blur-md">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <User class="w-[24px] h-[24px]" />
                    </span>
                    <span class="text-[16px] text-roboto font-[400]">BÓNG ĐÁ</span>
                  </div>

                  <!-- Home -->
                  <div class="p-2 flex items-center justify-start text-left mr-40 cursor-pointer w-full rounded-[25px] bg-white/80">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Home class="w-[24px] h-[24px]" />
                    </span>
                    <span>Đua bi</span>
                  </div>

                  <!-- Dart -->
                  <div class="p-2 flex items-center justify-start text-left mr-40 cursor-pointer w-full rounded-[25px] bg-white/80">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Dart class="w-[24px] h-[24px]" />
                    </span>
                    <span>BÓNG rổ</span>
                  </div>

                  <!-- Wallet -->
                  <div class="p-2 flex items-center justify-start text-left mr-40 cursor-pointer w-full rounded-[25px] bg-white/80">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Wallet class="w-[24px] h-[24px]" />
                    </span>
                    <span>e-sports</span>
                  </div>

                  <!-- Chart -->
                  <div class="p-2 flex items-center justify-start text-left mr-40 cursor-pointer w-full rounded-[25px] bg-white/80">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Chart class="w-[24px] h-[24px]" />
                    </span>
                    <span>Casino</span>
                  </div>
              </div>
              <div 
                  v-if="activeDropdown === 'nav2'" 
                  class="absolute left-0 mt-[50px] sm:mt-[150px] lg:mt-[240px] w-[148px] max-w-[275px] 
                        bg-white/80 shadow-lg rounded-[20px] z-[999] 
                        translate-x-[-400px] sm:translate-x-[-250px] lg:translate-x-[497px] backdrop-blur-md"
                >

                  <div id="user" class="p-2 flex items-center justify-start text-left mr-40 cursor-pointer w-full rounded-[25px] bg-white/80 backdrop-blur-md">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <User class="w-[24px] h-[24px]" />
                    </span>
                    <span class="text-[16px] text-roboto font-[400]">BÓNG ĐÁ</span>
                  </div>

                  <!-- Home -->
                  <div class="p-2 flex items-center justify-start text-left mr-40 cursor-pointer w-full rounded-[25px] bg-white/80">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Home class="w-[24px] h-[24px]" />
                    </span>
                    <span>Đua bi</span>
                  </div>

                  <!-- Dart -->
                  <div id="dart" @click="setActive('dart')" class="p-2 flex items-center justify-start text-left mr-40 cursor-pointer w-full rounded-[25px] bg-white/80">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Dart class="w-[24px] h-[24px]" />
                    </span>
                    <span>BÓNG rổ</span>
                  </div>

                  <!-- Wallet -->
                  <div id="wallet" @click="setActive('wallet')" class="p-2 flex items-center justify-start text-left mr-40 cursor-pointer w-full rounded-[25px] bg-white/80">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Wallet class="w-[24px] h-[24px]" />
                    </span>
                    <span>e-sports</span>
                  </div>

                  <!-- Chart -->
                  <div id="chart" @click="setActive('chart')" class="p-2 flex items-center justify-start text-left mr-40 cursor-pointer w-full rounded-[25px] bg-white/80">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Chart class="w-[24px] h-[24px]" />
                    </span>
                    <span>Casino</span>
                  </div>
              </div>
              <div 
                  v-if="activeDropdown === 'nav3'" 
                  class="absolute left-0 mt-[50px] sm:mt-[150px] lg:mt-[240px] w-[148px] max-w-[275px] 
                        bg-white/80 shadow-lg rounded-[20px] z-[999] 
                        translate-x-[-400px] sm:translate-x-[-250px] lg:translate-x-[497px] backdrop-blur-md"
                >

                  <div id="user" class="p-2 flex items-center justify-start text-left mr-40 cursor-pointer w-full rounded-[25px] bg-white/80 backdrop-blur-md">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <User class="w-[24px] h-[24px]" />
                    </span>
                    <span class="text-[16px] text-roboto font-[400]">BÓNG ĐÁ</span>
                  </div>

                  <!-- Home -->
                  <div id="home" @click="setActive('home')" class="p-2 flex items-center justify-start text-left mr-40 cursor-pointer w-full rounded-[25px] bg-white/80">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Home class="w-[24px] h-[24px]" />
                    </span>
                    <span>Đua bi</span>
                  </div>

                  <!-- Dart -->
                  <div id="dart" @click="setActive('dart')" class="p-2 flex items-center justify-start text-left mr-40 cursor-pointer w-full rounded-[25px] bg-white/80">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Dart class="w-[24px] h-[24px]" />
                    </span>
                    <span>BÓNG rổ</span>
                  </div>

                  <!-- Wallet -->
                  <div id="wallet" @click="setActive('wallet')" class="p-2 flex items-center justify-start text-left mr-40 cursor-pointer w-full rounded-[25px] bg-white/80">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Wallet class="w-[24px] h-[24px]" />
                    </span>
                    <span>e-sports</span>
                  </div>

                  <!-- Chart -->
                  <div id="chart" @click="setActive('chart')" class="p-2 flex items-center justify-start text-left mr-40 cursor-pointer w-full rounded-[25px] bg-white/80">
                    <span
                      class="inline-flex bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent mr-4">
                      <Chart class="w-[24px] h-[24px]" />
                    </span>
                    <span>Casino</span>
                  </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="p-2 m-0">
            <div class="flex justify-left gap-x-14 text-black font-roboto font-[400] text-[16px]">
              <span class="inline-flex items-center gap-2">
                <ChatIcon class="w-5 h-5 text-white" />
                <span class="bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent">Bảng Tin</span>
              </span>
              <span
                class="inline-flex items-center gap-2 bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent">
                <Play class="w-5 h-5 text-white" />
                <span class="bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent">Reels</span>
              </span>
              <span class="inline-flex items-center gap-2">
                <Video class="w-5 h-5 text-white" />
                <span
                  class="bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent">Highlight</span>
              </span>
              <span class="inline-flex items-center gap-2">
                <Multimedia class="w-5 h-5 text-white" />
                <span class="bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent">Tip Kèo</span>
              </span>
              <span class="inline-flex items-center gap-2">
                <CirclePlay class="w-5 h-5 text-white" />
                <span class="bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent">Phim Ảnh</span>
              </span>
              <span class="inline-flex items-center gap-2">
                <WorkShop class="w-5 h-5 text-white" />
                <span class="bg-gradient-to-r from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent">Truyện
                  Tranh</span>
              </span>
              <div class="h-[34px] w-[135px] bg-white rounded-[20px] text-black p-1 flex">
                <div class="flex items-center justify-start flex-1">
                  <img class="w-[30px] h-[30px]" src="../assets/images/icon/vn_flag.png" alt="">
                  <span
                    class="p-1 font-[700] text-[14px] font-roboto uppercase bg-gradient-to-t from-[#000000] to-[#5C5C5C] bg-clip-text text-transparent">tiếng
                    việt</span>
                </div>
              </div>
              <div class="ml-[35px] p-[2px] rounded-[20px] bg-[#F8E889]">
                <div
                  class="h-[30px] w-[60px] bg-gradient-to-r from-[#000000] to-[#5C5C5C] rounded-[20px] flex items-center">
                  <div class="flex items-center justify-start flex-1">
                    <img class="w-[30px] h-[30px] border border-[#F8E889]  rounded-full"
                      src="../assets/images/icon/sun.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </header>
</template>
