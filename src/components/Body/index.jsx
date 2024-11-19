import styles from "./styles.module.scss"
import backgroundVideo from "../../../src/assets/background_video.mp4"
import profilePic from "../../../src/assets/profile_pic.jpeg"
import { imagesCarroussel } from "../../database/workImages"
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri"
import { IoIosChatbubbles } from "react-icons/io"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

export const Body = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerBackground}>
        <video src={backgroundVideo} autoPlay muted loop playsInline />
      </div>
      <div className={styles.containerProfile}>
        <div className={styles.profilePic}>
          <img src={profilePic} alt="" />
        </div>
        <span className="textTitle">@jhulashdesigner8</span>
      </div>
      <ul className={styles.containerLinks}>
        <li className={styles.linkTable}>
          <a
            href="https://www.instagram.com/juhlashdesigner8?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <RiInstagramFill size={21} />
            <span className="textLinks">Confira meu Instagram!</span>
          </a>
        </li>
        <li className={styles.linkTable}>
          <a href="https://www.wa.link/e5ix0x" target="_blank">
            <RiWhatsappFill size={21} />
            <span className="textLinks">Chama no Whatsapp!</span>
          </a>
        </li>
        <li className={styles.linkTable}>
          <a href="https://www.wa.link/xavgcj" target="_blank">
            <IoIosChatbubbles size={21} />
            <span className="textLinks">Agende um Horário</span>
          </a>
        </li>
      </ul>
      <div className={styles.containerCarroussel}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            clickable: true,
            loop: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {imagesCarroussel.map((image) => (
            <SwiperSlide key={image.id} className={styles.slideItem}>
              <img src={image.image} alt="Trabalho Esteticista" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <footer className={styles.containerFooter}>
        <p className="textButton">
          Entre em contato comigo e venha conferir um pouco dos meus serviços
        </p>
        <p className="textButton">
          ⚜️Extensão de cílios ⚜️ Designer de sobrancelha ⚜️Depilações
          ⚜️micropigmentação
        </p>
      </footer>
    </div>
  )
}
