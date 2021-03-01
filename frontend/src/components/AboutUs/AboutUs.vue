<template>
  <div class="">

    <p class="language" @click="changeLanguage()" v-show="!english">English</p>
    <p class="language" @click="changeLanguage()" v-show="english">Chinese</p>
    <div v-show="english" class="english">
      <h1>About Us</h1>
      <p>“Fur Friend Rescue” is one of projects from a non-profit organization called "Little
  Masters Club". This organization has been established for more than seven years and
  has become a household name in Seattle's Chinese community. The goal of the Little
  Master Club is "parents set up the stage, children sing the opera" - that is, the parents
  initiate one project and the children are responsible for various duties. The children
  would learn and grow through these specific projects, and gradually become the leaders
  of the project.
  </p>
      <h3>Project Objectives</h3>
      <p>We not only help stray dogs find their forever homes, but also hope that through the
  project, the children will learn to respect animals, love animals, learn to communicate
  and have a sense of responsibility, so as to achieve our goal of developing and training
  children's executive ability and leadership.
  </p>
      <h3>Project Goal</h3>
      <p>The stray dogs base of Baoen temple in Shanghai, the organizations that need help to
  save stray dogs, and our local adoption agencies in Seattle.</p>
      <h3>Project Exocution</h3>
      <ol>
        <li>Let more people know about our “Fur Friend Rescue” project by setting up
    websites and social media pages</li>
        <li>The children will continue to update and maintain our website and webpages</li>
        <li>Work that the children participate in, but the parents are responsible for: the
    adoption family qualification check, phone interviews, inspect the adoption
    families in person and so on.</li>
        <li>The children will follow up on the adoption families in Seattle later on.</li>
        <li>To fundraise at local companies, or raise money for the stray dog shelter base in Shanghai through charity sales and other forms.</li>
        <li>The children will volunteer at local stray dog adoption centers.</li>
      </ol>
      <h3>Adoption Proccess</h3>
      <ol>
        <li>Submit your online application (even if you are not sure which dog you want).
  Please note that we will not necessarily give the dogs to the first families to apply, but
  are trying to find the most suitable family for them. As we are 100% run by volunteers, it
  may take 1-3 working days to process your application. When your initial application is
  accepted by us, you will receive our email notification.</li>
        <li>Telephone interview.
  We will have a phone interview with the adoption families. This is to further determine
  whether the dog is suitable for your family and your lifestyle.
  </li>
        <li> In-home inspection
  Our volunteers will go to your home to make sure your home environment is suitable for
  the dog, and also observe the interaction between your family members and other pets</li>
        <li>Looking for flying volunteers
  Once the adoption family is confirmed, volunteers at the Baoen temple will spay/neuter
  the dog and start actively looking for flying volunteers.
  （Due to the reduction of flights between China and the United States during the
  epidemic period, it will take longer to find a flying volunteer. So we will put your dog in a
  temporary foster family before we find a flight volunteer. At the same time,the volunteers
  will give your dog vaccinations.)
  </li>
        <li>At the airport, you will meet your dog for the first time.</li>
      </ol>
      <h3>Cost</h3>
      <p>The stray dogs of Baoen temple in Shanghai not only don't charge, but also pay the cost
  of spaying/neutering, vaccine and microchip. They only wish that the stray dogs could
  find their forever homes.</p>
      <p>The adoption family only pays the cost of the air ticket (currently $200) and the cost of
  going out of the customs.</p>
    </div>
    <div v-show="!english" class="chinese">
      <h1>关于我们</h1>
      <p>“Fur Friend Rescue” 项目是非营利组织“小大师聚乐部” 下众多的项目之一。这个组织已经成立了有7年多的时间，在西雅图的华人社区中已经早已是家喻户晓。小大师的宗旨是“家长搭台,孩子唱戏”-即由家长发起项目，由孩子们负责各项职责. 通过具体的项目操作给孩子们学习和成长的机会，最后让孩子们逐渐成为项目的核心力量和领导者。</p>
      <h3>项目目的</h3>
      <p>既帮助流浪狗找到一个温暖的家，又希望孩子们在这个过程中，学会尊重动物爱护动物，学会沟通和责任心，最终达到我们培养和锻炼孩子执行力和领导力的目的。</p>
      <h3>项目对象</h3>
      <p>上海报恩寺的流浪狗基地，有需要帮助的救助流浪狗的组织，以及美国西雅图当地的收养机构。</p>
      <h3>项目具体执行</h3>
      <ol>
        <li>通过建立英文网站和社交媒体网页，让更多的人了解”Fur Friend Rescue”.</li>
        <li>孩子们继续负责网站和网页的更新.</li>
        <li>孩子们参与，但是由家长负责的工作：对收养人资格审查，电话采访，实地考察收养家庭等等。</li>
        <li>孩子们对领养到西雅图的狗狗做后续的跟进。</li>
        <li>到本地大公司募捐，或者通过义卖等形式为在上海的流浪狗收容基地筹款。</li>
        <li>孩子们去本地的流浪狗收养所做志愿者。</li>
      </ol>
      <h3>收养过程</h3>
      <ol>
        <li>提交您的在线申请（即使您尚未确定想要哪一只狗）。请注意，我们不一定会采用第一个申请的家庭，而是努力为狗狗寻找最合适的家庭。由于我们是100％志愿者运行的，因此可能需要1-3个工作日才能处理您的申请。当您的初始申请被我们接受后，您将会收到我们的电子邮件通知。</li>
        <li> 电话采访。我们将与寄养家庭进行电话采访。这是为了进一步确定狗狗是否适合您的家人和生活方式。</li>
        <li>实地勘查。我们志愿者会去您的家，以确保房屋环境等适合狗狗，并观察您和您的家人与其他宠物的之间的互动。</li>
        <li>寻找飞行志愿者一旦确认领养人后，报恩寺的义工会为被领养的狗狗做绝育手术，并开始积极寻找飞行志愿者。（由于疫情期间中美航班剧减，在找到飞行志愿者之前，我们将会将您的狗狗寄放在暂时的寄宿家庭中。与此同时，志愿者会给狗狗打疫苗）</li>
        <li>在机场您与您的狗狗第一次见面。</li>
      </ol>
      <h3>费用</h3>
      <p>上海报恩寺的流浪狗不仅不向您收费，而且还承担了狗狗的绝育手术费，疫苗费用以及微芯片的费用，他们的唯一愿望就是希望狗狗能找到一个温暖的家。</p>
      <p>领养人只需要承担：机票费用 （目前是$200）和出海关的费用。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutUs',
    data() {
      return {
        english: true,
      }
    },
    created() {},
    mounted() {},
    methods: {
      changeLanguage() {
        this.english = !this.english;
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  text-align: left;
}
ol {
  text-align: center;
}
h3 {
  border-bottom: 2px solid #89cff0;
}
.language{
  float:right;
  border: 1px solid black;
  background-color: #d3d3d3;
}
</style>
