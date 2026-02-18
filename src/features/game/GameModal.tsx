import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  open: boolean;
  onClose: () => void;
  language: string;
}

export const GameModal = ({ open, onClose, language }: Props) => (
  <Dialog fullScreen open={open} onClose={onClose}>
    <IconButton
      onClick={onClose}
      sx={{ position: "absolute", top: 20, right: 20, zIndex: 10 }}
    >
      <CloseIcon />
    </IconButton>
    <iframe
      src={`https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=${language}`}
      width="100%"
      height="100%"
      style={{ border: "none" }}
    />
  </Dialog>
);
