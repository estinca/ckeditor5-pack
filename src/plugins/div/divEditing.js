import InsertDivCommand from './insertDivCommand';
import Plugin from "@ckeditor/ckeditor5-core/src/plugin";

import { toWidget, toWidgetEditable } from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';

export default class DivEditing extends Plugin {

    static get requires() {                                                    // ADDED
        return [ Widget ];
    }

    init() {
        console.log('DivEditing initializing!');
        
        const editor = this.editor;
		const model = editor.model;
		const schema = model.schema;

        schema.register('div', {
            isObject: true,

            allowWhere: '$block',

        });

        schema.register('content', {
            isLimit: true,

            allowIn: 'div',
            
            allowContentOf: '$root'

        });

        this._defineConverters();

        this.editor.commands.add( 'insertDiv', new InsertDivCommand( this.editor ) );
    }

    _defineConverters() {
        
        const conversion = this.editor.conversion;

        conversion.for( 'upcast' ).elementToElement( {
            model: 'div',
            view: {
                name: 'div',
                classes: 'container'
            }
        } );
        conversion.for( 'dataDowncast' ).elementToElement( {
            model: 'div',
            view: {
                name: 'div',
                classes: 'container'
            }
        } );
        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'div',
            view: ( modelElement, viewWriter ) => {
                const div = viewWriter.createContainerElement( 'div', { class: 'container' } );
                
                return toWidget( div, viewWriter, { label: 'div widget' } );
            }
        } );


        conversion.for( 'upcast' ).elementToElement( {
            model: 'content',
            view: {
                name: 'div',
                classes: 'content'
            }
        } );
        conversion.for( 'dataDowncast' ).elementToElement( {
            model: 'content',
            view: {
                name: 'div',
                classes: 'content'
            }
        } );
        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'content',
            view: ( modelElement, viewWriter ) => {
                // Note: You use a more specialized createEditableElement() method here.
                const div = viewWriter.createEditableElement( 'div', { class: 'content' } );

                return toWidgetEditable( div, viewWriter );
            }
        } );

    }
}