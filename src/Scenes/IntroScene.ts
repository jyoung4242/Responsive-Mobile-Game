import { Engine, Scene, SceneActivationContext } from "excalibur";
import { UILayout } from "../Lib/UILayout";
import { getLandscapeLayout } from "../UI/Landscape";
import { getPortraitLayout } from "../UI/Portrait";

export class IntroScene extends Scene {
  layout: UILayout | undefined;

  orientation = "portrait";
  resizeHandler: any;

  constructor() {
    super();
  }

  onActivate(context: SceneActivationContext<unknown>): void {
    console.log("intro scene");

    this.orientation = getOrientation();
    this.layout = new UILayout(context.engine);
    this.layout = updateUILayout(this.layout, context.engine, this.orientation);

    this.resizeHandler = () => {
      this.orientation = getOrientation();
      this.layout?.resetUI();
      this.layout = updateUILayout(this.layout as UILayout, context.engine, this.orientation);
    };
    window.addEventListener("resize", this.resizeHandler);
  }
}

function updateUILayout(layout: UILayout, engine: Engine, orientation: string): UILayout {
  console.log("updateUILayout", orientation);

  if (orientation == "landscape") getLandscapeLayout(layout, engine);
  else getPortraitLayout(layout, engine);
  return layout;
}

function getOrientation() {
  return window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape";
}
