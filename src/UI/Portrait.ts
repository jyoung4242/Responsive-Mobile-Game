import { Color, Engine, vec, Vector } from "excalibur";
import { UIContainer, UIContainerArgs, UILayout } from "../Lib/UILayout";
import { c } from "vite/dist/node/moduleRunnerTransport.d-DJ_mE5sf";

export function getPortraitLayout(layout: UILayout, engine: Engine) {
  console.log("getPortraitLayout");

  layout.root.addChildContainer(
    new UIContainer({
      pos: vec(0, 0),
      name: "TitleContainer",
      layoutDirection: "horizontal",
      positionContentStrategy: "space-between",
      alignmentContentStrategy: "center",
      width: engine.screen.width,
      height: 40,
      color: Color.Red,
    })
  );

  layout.root.addChildContainer(
    new UIContainer({
      pos: vec(0, 40),
      name: "ButtonContainer",
      layoutDirection: "vertical",
      positionContentStrategy: "space-evenly",
      alignmentContentStrategy: "center",
      width: engine.screen.width,
      height: 200,
      color: Color.Blue,
    })
  );
}
