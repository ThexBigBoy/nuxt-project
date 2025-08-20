<template>
  <div class="relative w-full h-[277px] pb-2 flex flex-col justify-center">
    <div class="w-full h-[267px] flex flex-col justify-center">
      <div
        class="w-full h-[220px] flex items-center px-4 sm:px-8 md:px-12 border-t-2 border-[#E4B764] rounded-[15px] relative overflow-hidden isolate">

        <!-- Left Nav -->
        <button @click="scrollLeft"
          class="absolute left-0 bottom-0 w-[132px] h-[220px] flex items-center z-10 hover:bg-gradient-to-r from-black/10 to-transparent transition-all duration-300">
          <div
            class="w-[46px] h-[100px] bg-[#F4F5F7] bg-opacity-50 border border-white rounded-l-[15px] rounded-r-[5px] shadow-md flex justify-center items-center hover:bg-opacity-70">
            <div class="w-[36px] h-[36px] rotate-180 relative">
              <div class="absolute inset-0 font-[800]">></div>
            </div>
          </div>
        </button>

        <!-- Thumbnails -->
        <div ref="thumbnailsList" class="w-full h-[220px] flex items-center gap-5 z-0 overflow-x-auto overflow-y-hidden scroll-smooth px-2 sm:px-5 
                 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div v-for="(match, index) in matches" :key="index"
            class="w-[280px] h-[220px] flex flex-col justify-end items-center ">
            <div
              class="w-[280px] h-[190px] bg-gradient-to-b from-[#E4B764] to-[#F8E889] border border-[#E4B764] rounded-[15px] shadow-md flex flex-col justify-end items-center">
              <div
                class="w-full h-full bg-gradient-to-b from-transparent to-black/80 rounded-[15px] flex flex-col justify-between relative overflow-hidden">
                <!-- Background -->
                <div class="absolute inset-0 bg-cover bg-center opacity-70"
                  :style="{ backgroundImage: `url(${match.bg})` }"></div>

                <div class="w-full flex justify-between items-start p-2 z-10">
                  <div v-if="match.isHot"
                    class="w-[35px] h-[29px] bg-red-500 rounded-b-lg flex items-center justify-center text-white text-xs font-bold">
                    HOT</div>
                  <div v-else class="w-[35px] h-[29px]"></div>
                  <div class="bg-black/70 text-white text-xs px-2 py-1 rounded-md">{{ match.time }}</div>
                </div>

                <!-- Bottom -->
                <div class="w-full flex justify-between items-end px-2 z-10">
                  <div class="w-[36px] h-[36px] flex justify-center items-center bg rounded-full">
                    <img :src="match.sportIcon" :alt="match.sport" class="w-[36px] h-[36px] object-contain">
                  </div>
                </div>
              </div>
            </div>

            <!-- Title -->
            <div
              class="w-[280px] h-[50px] bg-gradient-to-b from-[#E4B764] to-[#F8E889] border border-[#E4B764] rounded-b-[15px] shadow-md flex justify-center items-center">
              <div
                class="w-full h-[46px] bg-gradient-to-b from-[#F8E889] to-[#E4B764] border border-[#F8E889] rounded-[15px] flex justify-between items-center px-2">
                <div class="flex-1 flex flex-col items-start pl-3">
                  <span class="text-[16px] text-[#5C5C5C] font-medium truncate">{{ match.teams }}</span>
                  <span class="text-[16px] font-bold text-[#1A1A1A] uppercase">BLV {{ match.commentator }}</span>
                </div>
                <div class="w-[54px] h-[42px] flex flex-col justify-center items-center px-1">
                  <div v-if="match.isLive"
                    class="w-[53px] h-[22px] bg-red-500 rounded-md flex items-center justify-center text-white text-xs font-bold">
                    LIVE</div>
                  <div v-else class="w-[53px] h-[22px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Nav -->
        <button @click="scrollRight"
          class="absolute right-0 bottom-0 w-[132px] h-[220px] flex justify-end items-center z-10 hover:bg-gradient-to-l from-black/10 to-transparent transition-all duration-300">
          <div
            class="w-[46px] h-[100px] bg-[#F4F5F7] border border-white rounded-r-[15px] rounded-l-[5px] shadow-md flex justify-center items-center hover:bg-opacity-70">
            <div class="w-[36px] h-[36px] relative">
              <div class="absolute inset-0 font-[800]">></div>
            </div>
          </div>
        </button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footballBgs: [
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=280&h=187&q=80"
      ],
      basketballBgs: [
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=280&h=187&q=80"
      ],
      matches: [
        { teams: 'Team A VS Team B', commentator: 'John Smith', isLive: true, isHot: true, time: '19:45', sport: 'Football', sportIcon: '/images/icon/soccer.gif', status: 'Live Now' },
        { teams: 'Team A VS Team B', commentator: 'Mike Johnson', isLive: false, isHot: false, time: '21:30', sport: 'Basketball', sportIcon: '/images/icon/basketball.gif', status: 'Upcoming' },
        { teams: 'Team A VS Team B', commentator: 'David Wilson', isLive: true, isHot: true, time: '20:00', sport: 'Football', sportIcon: '/images/icon/soccer.gif', status: 'Live Now' },
        { teams: 'Team A VS Team B', commentator: 'James Taylor', isLive: false, isHot: true, time: '23:00', sport: 'Basketball', sportIcon: '/images/icon/basketball.gif', status: 'Upcoming' },
        { teams: 'Team A VS Team B', commentator: 'Carlos Garcia', isLive: true, isHot: true, time: '20:45', sport: 'Football', sportIcon: '/images/icon/soccer.gif', status: 'Live Now' },
        { teams: 'Team A VS Team B', commentator: 'Sarah Lee', isLive: false, isHot: false, time: '18:30', sport: 'Basketball', sportIcon: '/images/icon/basketball.gif', status: 'Upcoming' },
        { teams: 'Team A VS Team B', commentator: 'Tom Hanks', isLive: true, isHot: true, time: '19:15', sport: 'Football', sportIcon: '/images/icon/soccer.gif', status: 'Live Now' },
        { teams: 'Team A VS Team B', commentator: 'Olivia Brown', isLive: true, isHot: true, time: '22:00', sport: 'Football', sportIcon: '/images/icon/soccer.gif', status: 'Live Now' },
        { teams: 'Team A VS Team B', commentator: 'Daniel Green', isLive: false, isHot: true, time: '23:15', sport: 'Basketball', sportIcon: '/images/icon/basketball.gif', status: 'Upcoming' },
        { teams: 'Team A VS Team B', commentator: 'Sophie Turner', isLive: false, isHot: false, time: '19:00', sport: 'Football', sportIcon: '/images/icon/soccer.gif', status: 'Upcoming' },
        { teams: 'Team A VS Team B', commentator: 'Lucas Brown', isLive: true, isHot: true, time: '20:30', sport: 'Basketball', sportIcon: '/images/icon/basketball.gif', status: 'Live Now' },
        { teams: 'Team A VS Team B', commentator: 'Mia Johnson', isLive: false, isHot: false, time: '21:45', sport: 'Football', sportIcon: '/images/icon/soccer.gif', status: 'Upcoming' },
        { teams: 'Team A VS Team B', commentator: 'Liam Davis', isLive: true, isHot: true, time: '19:30', sport: 'Football', sportIcon: '/images/icon/soccer.gif', status: 'Live Now' },
        { teams: 'Team A VS Team B', commentator: 'Martinez', isLive: false, isHot: false, time: '22:15', sport: 'Basketball', sportIcon: '/images/icon/basketball.gif', status: 'Upcoming' },
        { teams: 'Team A VS Team B', commentator: 'Sophia Lee', isLive: true, isHot: true, time: '21:30', sport: 'Football', sportIcon: '/images/icon/soccer.gif', status: 'Live Now' },
      ]
    }
  },
  methods: {
    scrollLeft() {
      this.$refs.thumbnailsList.scrollBy({ left: -300, behavior: 'smooth' });
    },
    scrollRight() {
      this.$refs.thumbnailsList.scrollBy({ left: 300, behavior: 'smooth' });
    },
    getRandomBg(sport) {
      if (sport === 'Football') {
        return this.footballBgs[Math.floor(Math.random() * this.footballBgs.length)];
      } else if (sport === 'Basketball') {
        return this.basketballBgs[Math.floor(Math.random() * this.basketballBgs.length)];
      } else {
        return '';
      }
    }
  },
  created() {
    // Assign random bg to each match once
    this.matches.forEach(match => {
      match.bg = this.getRandomBg(match.sport);
    });
  }
}
</script>
