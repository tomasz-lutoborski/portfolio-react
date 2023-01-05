import styled, { useTheme } from "styled-components";
import { devices } from "../../utils/mediaQueries";
import PopupMenuItem from "./PopupMenuItem";
import { AboutIcon, ContactIcon, GoalsIcon, TechStackIcon } from "./Icons";
import { motion, Variants } from "framer-motion";

const Menu = styled(motion.ul)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 0.5rem;
  gap: 1rem;
  position: absolute;
  bottom: 3.2rem;
  left: 0.2rem;
  border: ${({ theme }) => theme.shared.border[1]} solid
    ${({ theme }) => theme.text};
  border-radius: ${({ theme }) => theme.shared.borderRadius[1]};
  background-color: ${({ theme }) => theme.menuBackground};
  box-shadow: ${({ theme }) => theme.shadows[0]};

  @media ${devices.tablet} {
    padding: 1rem;
    bottom: 4.3rem;
    gap: 1.5rem;
  }

  @media ${devices.desktop} {
    bottom: 5.5rem;
  }
`;

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const PopupMenu = () => {
  const theme = useTheme();

  return (
    <Menu
      variants={{
        open: {
          clipPath: "inset(0% 0% 0% 0% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05,
          },
        },
        closed: {
          clipPath: "inset(10% 50% 90% 50% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3,
          },
        },
      }}
    >
      <motion.li variants={itemVariants}>
        <PopupMenuItem title="My goals" Icon={<GoalsIcon theme={theme} />} />
      </motion.li>
      <motion.li variants={itemVariants}>
        <PopupMenuItem title="About me" Icon={<AboutIcon theme={theme} />} />
      </motion.li>
      <motion.li variants={itemVariants}>
        <PopupMenuItem
          title="My tech stack"
          Icon={<TechStackIcon theme={theme} />}
        />
      </motion.li>
      <motion.li variants={itemVariants}>
        <PopupMenuItem
          title="Contact me"
          Icon={<ContactIcon theme={theme} />}
        />
      </motion.li>
    </Menu>
  );
};

export default PopupMenu;
