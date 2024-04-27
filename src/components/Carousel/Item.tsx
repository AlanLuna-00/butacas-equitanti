import { Paper, Button } from "@mui/material";
import Image from "next/image";

function Item(props: any) {
  return (
    <Paper>
      <Image
        src={props.item.image}
        alt={props.item.name}
        width={500}
        height={500}
        style={{
          width: "100%",
          height: "45vh",
        }}
      />
    </Paper>
  );
}

export default Item;
