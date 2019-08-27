
import Command from '@ckeditor/ckeditor5-core/src/command';

export default class InsertDivCommand extends Command {
    execute() {
        this.editor.model.change( writer => {
            // Insert <div>*</div> at the current selection position
            // in a way that will result in creating a valid model structure.
            this.editor.model.insertContent( createDiv( writer ) );
        } );
    }

    refresh() {
        const model = this.editor.model;
        const selection = model.document.selection;
        const allowedIn = model.schema.findAllowedParent( selection.getFirstPosition(), 'div' );

        this.isEnabled = allowedIn !== null;
    }
}

function createDiv( writer ) {
    const div = writer.createElement( 'div' );
    const content = writer.createElement('content');

    writer.append(content, div);

    writer.appendElement( 'paragraph', content );

    return div;
}