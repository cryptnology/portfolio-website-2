'use client';

import { Modal } from '@mui/material';

interface Props {
  isOpen: boolean;
  link: string;
  setIsOpen: (value: boolean) => void;
}

const VideoModal = ({ isOpen, setIsOpen, link }: Props) => {
  return (
    <Modal
      closeAfterTransition
      className="flex justify-center items-center"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <iframe
        className="w-[90%] h-[50%] md:w-[80%] md:h-[60%] lg:w-[70%] lg:h-[70%]"
        src={`https://www.youtube.com/embed/${link}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Modal>
  );
};

export default VideoModal;
