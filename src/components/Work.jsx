import React, { useState } from "react";
import { data } from "../data/data.js";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ReactMarkdown from "react-markdown";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


const Work = () => {
  const project = data;

  // Utilisez un tableau d'états pour gérer l'ouverture de chaque modal
  const [openArray, setOpenArray] = React.useState(
    Array(project.length).fill(false)
  );

  const handleOpen = (index) => {
    const newOpenArray = [...openArray];
    newOpenArray[index] = true;
    setOpenArray(newOpenArray);
  };

  const handleClose = (index) => {
    const newOpenArray = [...openArray];
    newOpenArray[index] = false;
    setOpenArray(newOpenArray);
  };

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f] mb-32">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font-bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  <button
                    onClick={() => handleOpen(index)}
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Presentation
                  </button>
                  <Modal
                    open={openArray[index]}
                    onClose={() => handleClose(index)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        {item.name}
                      </Typography>
                      <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        <ReactMarkdown
                          id="modal-modal-description"
                          components={{ p: Typography }}
                        >
                          {item.description}
                        </ReactMarkdown>
                      </div>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
