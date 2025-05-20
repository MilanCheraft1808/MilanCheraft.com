import type {IBaseImage} from "~/components/base/BaseImage/IBaseImage";
import type {IBaseIconBox} from "~/components/base/BaseIconBox/IBaseIconBox";
import type {IBaseButton} from "~/components/base/BaseButton/IBaseButton";

export interface IBaseCard {
    description: string;
    image: IBaseImage;
    button: IBaseButton;
    iconBox: IBaseIconBox
}