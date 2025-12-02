<script setup>
const profilePhoto = new URL("./assets/photo.jpg", import.meta.url).href;
</script>

<template>
  <div class="container">
    <div class="personal-information">
      <div class="personal-information__photo-container">
        <img
          :src="profilePhoto"
          alt="Jose Daniel"
          class="object-cover"
          width="25px"
        />
      </div>

      <h1>Jose Chacón</h1>
      <span>Computer Science Engineering Student from ENSTA</span>

      <div class="icons-container">
        <a href="#" class="text-white hover:text-white/80 transition text-xl"
          ><i class="fab fa-linkedin-in"></i
        ></a>
        <a href="#" class="text-white hover:text-white/80 transition text-xl"
          ><i class="fab fa-github"></i
        ></a>
        <a href="#" class="text-white hover:text-white/80 transition text-xl"
          ><i class="fas fa-envelope"></i
        ></a>
      </div>

      <a href="http://" class="button button-download-cv">Downlaod CV</a>
    </div>
    <div class="content-container">
      <div class="description-container">
        <div class="photo-container">
          <img :src="profilePhoto" alt="Jose Daniel" class="object-cover" />
        </div>
        <div class="description-content">
          <h3>Computer Science Engineering Student from ENSTA</h3>
          <h2>José Chacón</h2>
          <p>
            Double-degree student at ENSTA Paris (AI specialization) and UNET in
            Computer Engineering, within Institut Polytechnique de Paris. I
            combine <strong>3+ years of software development experience</strong> with data analytics & ML: Python
            (pandas, scikit-learn), SQL, EDA, predictive modeling, Tableau.
          </p>
          <p>
            Built end-to-end products and REST APIs with Laravel/JS; comfortable
            across frontend & backend with solid Git/testing habits. Currently
            focusing on turning data into production-ready insights: feature
            engineering, model validation, and lightweight MLOps.
          </p>

          <div class="buttons-container">
            <a href="http://" class="button transparent">Download CV</a>
            <a href="http://" class="button transparent gray-border">Contact</a>
          </div>
        </div>
      </div>

      <div class="what-i-do-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur dolores laborum dolorum voluptatibus earum qui temporibus
          cumque reprehenderit distinctio perferendis, unde praesentium quae
          voluptates? Excepturi voluptatibus distinctio officiis possimus!
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: 0.75fr 2fr;
  height: 80vh;
  overflow: hidden;
  border-radius: 32px;
  max-width: 75%;
  box-shadow: 0 0 100px -5px rgba(0, 0, 0, 0.25);
  position: relative;
}

.personal-information {
  background-color: #04b4e0;
  border-radius: 30px 0 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 65px 50px 45px 30px;
  color: #fff;

  .personal-information__photo-container {
    position: relative;

    &::after {
      position: absolute;
      opacity: 0.3;
      top: 7%;
      left: 7%;
      border-radius: 300px;
      content: "";
      height: calc(100% + 0px);
      width: calc(100% + 0px);
      background-image: -webkit-repeating-radial-gradient(
        center center,
        #fff,
        #fff 1px,
        transparent 0px,
        transparent 100%
      );
      background-image: -moz-repeating-radial-gradient(
        center center,
        #fff,
        #fff 1px,
        transparent 0px,
        transparent 100%
      );
      background-image: -ms-repeating-radial-gradient(
        center center,
        #fff,
        #fff 1px,
        transparent 0px,
        transparent 100%
      );
      -webkit-background-size: 6px 6px;
      -moz-background-size: 6px 6px;
      background-size: 6px 6px;
      z-index: 1;
    }
  }

  img {
    position: relative;
    z-index: 2;
    height: auto;
    max-height: 150px;
    width: auto;
    max-width: 150px;
    border-radius: 50%;
    border: 3px solid #fff;
  }

  h1 {
    font-size: 36px;
    font-weight: 600;
    line-height: 1.2em;
    margin-bottom: 4px;
  }

  span {
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: 300;
    text-align: center;
  }

  .icons-container,
  .icons-container a {
    display: flex;
    gap: 16px;
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    margin-bottom: 36px;
  }
}

.content-container {
  background-color: #fff;
  padding: 60px;
  border-radius: 30px;
  width: 92%;
  transform: translateX(-32px);
  overflow-y: scroll;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.description-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 32px;
  align-items: center;

  p {
    font-size: 15px;
    font-weight: 400;
    font-style: normal;
    line-height: 1.75em;
    color: #555;
  }

  h3 {
    font-size: 16px;
    color: #aaa;
    font-weight: 300;
    margin-bottom: 146x;
  }

  h2 {
    font-size: 48px;
    line-height: auto;
    font-weight: 600;
    margin: 0;
    margin-bottom: 36px;
  }

  .buttons-container {
    display: flex;
    gap: 8px;
  }
}

.photo-container {
  padding: 18px;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  max-width: 500px;
  max-height: 500px;
  overflow: hidden;
  aspect-ratio: 1/1;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.button {
  display: inline-block;
  background-color: #04b4e0;
  color: #fff;
  border-color: #fff;
  text-decoration: none;
  cursor: pointer;
  padding: 12px 32px;
  border: 2px solid #fff;
  border-radius: 32px;
  box-shadow: 0px 10px 10px -8px rgba(0, 0, 0, 0.22);
  font-size: 15px;
  font-weight: 300;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #04b4e0;
    background-color: #fff;
  }

  &.transparent {
    border: 2px solid #04b4e0;
    background-color: transparent;
    color: #222;

    &:hover {
      background-color: #04b4e0;
      color: #fff;
    }
  }

  &.gray-border {
    border-color: #d5d5d5;
    color: #666;

    &:hover {
      border-color: #d5d5d5;
      background-color: #d5d5d5;
      color: #222;
    }
  }
}
</style>
