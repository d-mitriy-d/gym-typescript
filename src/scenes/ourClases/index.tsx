import { ClassType, SelectedPage } from "@/types/types"
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion"
import HText from "@/types/HText"
import Class from "./Class"

const clases: Array<ClassType> = [
  {
    name: "Weight Training Clases",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet sint natus reiciendis non laboriosam facere totam consequuntur, veniam quam similique.",
    image: image1
  },
  {
    name: "Yoga Clases",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet sint natus reiciendis non laboriosam facere totam consequuntur, veniam quam similique.",
    image: image2
  },
  {
    name: "Ab Core Clases",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet sint natus reiciendis non laboriosam facere totam consequuntur, veniam quam similique.",
    image: image3
  },
  {
    name: "Adventure Clases",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet sint natus reiciendis non laboriosam facere totam consequuntur, veniam quam similique.",
    image: image4
  },
  {
    name: "Fitnes Clases",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet sint natus reiciendis non laboriosam facere totam consequuntur, veniam quam similique.",
    image: image5
  },
  {
    name: "Training Clases",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet sint natus reiciendis non laboriosam facere totam consequuntur, veniam quam similique.",
    image: image6
  },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function OurClases({setSelectedPage}: Props) {
  return (
    <section
      id="ourclasses" 
      className="w-full bg-primary-100 pt-40"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClases)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x:-50 },
            visible: {opacity: 1, x: 0 } 
          }}
        >
          <div className="w-3/5">
            <HText>OUR CLASES</HText>
            <p className="py-5 ">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {clases.map((item: ClassType, index) => (
              <Class 
                key={`${item.name}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClases