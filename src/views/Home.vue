<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>never miss a post. Register for your free acount today!</h2>
        <router-link class="router-button" to="#">
          Register for KGBlogs <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blogs about tourist attractions, interesting events and activities in Kyrgyzstan",
        welcomeScreen: true,
        photo: "welcome",
      },
      sampleBlogPost: [
        {
          title: "World Nomad Games 2022",
          blogHTML: "The twentieth century was a time of great changes. Technological advances, combined with an increase in rationalism, led to conflicts and wars. Nationalism became a leading ideology, and its manifestations throughout the world led to the collapse of the colonial system and the emergence of nation-states with clear borders and symbols. The world demanded the creation of a human society made of peaceful interstate institutions.Sports have played an important role in the peace building process. The French philanthropist Pierre de Coubertin revived the Olympic Games at the end of the nineteenth century. He sought to change the world for the better, to make a contribution towards international understanding. He thought that young people should face each other in sport competitions, not on battlefields. The Olympics and sports championships have started an international movement of pacifist thinking. At the same time, they were the basis for the development of popular culture. At the end of the twentieth century, there were changes in economic, political and socio-cultural spheres, which gave rise to the phenomenon of globalization. In a globalized world, eroded barriers lead to the freer movement of information, capital, goods, services, and labor. Transnational projects have led to the standardization of preferences, values, and behavioral and cultural patterns. In these circumstances, it is as if the scope of various sports are more alienated from humanity. Records chasing, cold-blooded premeditation and the use of performance-enhancing drugs discredit the high achievements of modern sports. Today, globalization causes a gradual narrowing of cultural diversity by standardizing vital functions. With the spirit of finding ways to preserve cultural diversity and humanization of sports, President Almazbek Atambaev proposed the idea of the first-ever World Nomad Games in 2012, the mission of which is to revive and preserve the culture, identity and ways of life of nomadic peoples in the era of globalization. This idea was supported by the heads of the Republic of Kazakhstan, the Republic of Azerbaijan, and the Republic of Turkey. The nomadic world connects millions of people together. Their culture is original, unique, and shows diversity in ways of life of different peoples. For example, a traditional nomadic dwelling is a yurt. There are different types of yurts, depending on where the nomad lives: in the steppes, mountains, desert or forest. This is one example of the richness and scale of nomadic culture. When we look at history, we can see that different cultural exchanges happened because of nomads. In the past, before there were tourists or international forums, people lived in one place. The exception to this was nomads, who bravely moved from one place to another, from known areas to unknown ones. Nomads moved from Africa to Eurasia, then to both America and Australia. Nomads populated the world. They continually gained new knowledge and carried it with them to new parts of the world. Nomadic civilizations coexist harmoniously with nature. By adapting to their ecological environment, nomads do not significantly change the landscape of the earth. Nomads were not warlike, contrary to stereotypes; instead, they spend their free time playing different games of physical and intellectual nature. These games have survived to the present day. Under the leadership of the President of the Kyrgyz Republic, Almazbek Atambaev, a series of unique and spectacular sports was organized. On September 9, 2014, on the shores of Lake Issyk Kul in Cholpon Ata, Kyrgyzstan, the first World Nomad Games began. There were competitions involving ten different kinds of ethnosports. Along with sporting events, the program also included an ethnographic festival in the picturesque Kyrrchyn Gorge. In a large yurt village, different customs and traditions were shown, from the birth of a child and his first steps, to a spectacular equestrian show. The first ever Games were attended by athletes from 19 countries, and were covered by 250 journalists and cameramen from leading mass media outlets. And that was only the beginning. The rich heritage on display at the first Nomad Games created great interest and lots of positive feedback from the 30 countries represented in the audience. Because of this, the Government of the Kyrgyz Republic decided to hold the Second World Nomad Games in 2016. The Opening Ceremony is scheduled for September 3rd, 2016, on the shores of Lake Issyk Kul. The number of sports represented at the Games is expected to rise to 23, including martial arts, horse racing, archery, falconry, and hunting with taigans. A town will be built high in the mountains, in Kyrchyn Gorge, which will recreate nomads’ yurts with their interiors and craftsmen’s workshops with handicrafts. A Folk Festival will accompany participants and guests throughout the Games. Preparations for the Second World Nomad Games are in full swing",
          blogCoverPhoto: "nomad-games",
        },
        {
          title: "This is a Filter Title 2!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],

    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
