import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import DivEditing from './divEditing';
import DivUI from './divUI';

export default class Div extends Plugin {

    static get requires(){
        return [DivEditing, DivUI];
    }
}