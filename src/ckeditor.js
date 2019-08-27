/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import '../style/style.css';
// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Div from './plugins/div/div';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	RemoveFormat,
	Highlight,
	Alignment,
	Indent,
	IndentBlock,
	FontSize,
	FontFamily,
	FontColor,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Underline,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Div
];

// Editor configuration.
ClassicEditor.defaultConfig = {

	toolbar: {
		items: [
			'heading',
			'|',
			'removeFormat', 'outdent', 'indent',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'highlight',
			'alignment',
			'bold',
			'italic',
			'underline',
			'link',
			'|',
			'bulletedList',
			'numberedList',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'|',
			'div',
			'|',
			'undo',
			'redo'
		]
	},

	fontColor: {
		columns: 6,
		colors: [
			{
				color: '#a52422',
				label: 'RedBrown'
			},
			{
				color: '#890620',
				label: 'Burgundy'
			},
			{
				color: '#231942',
				label: 'YankeesBlue'
			},
			{
				color: '#a4bab7',
				label: 'CambridgeBlue'
			},
			{
				color: '#75b09c',
				label: 'GreenSheen'
			},
			{
				color: '#93e5ab',
				label: 'TealDeer'
			},
			{
				color: '#00241b',
				label: 'DarkGreen'
			},
			{
				color: '#36494e',
				label: 'Charcoal'
			},
			{
				color: '#bea57d',
				label: 'PaleTaupe'
			},
			{
				color: '#a0ca92',
				label: 'EtonBlue'
			},
			{
				color: '#b4dc7f',
				label: 'MediumSpringBud'
			},
			{
				color: '#e0be36',
				label: 'MeatBrown'
			},
			{
				color: '#feffa5',
				label: 'Canary'
			},
			{
				color: 'hsl(0, 0%, 0%)',
				label: 'Black'
			},
			{
				color: 'hsl(0, 0%, 30%)',
				label: 'Dim grey'
			},
			{
				color: 'hsl(0, 0%, 60%)',
				label: 'Grey'
			},
			{
				color: 'hsl(0, 0%, 90%)',
				label: 'Light grey'
			},
			{
				color: 'hsl(0, 0%, 100%)',
				label: 'White',
				hasBorder: true
			},
		]
	},

	highlight: {
		options: [
			{
				model: 'yellowMarker',
				class: 'marker-yellow',
				title: 'Yellow marker',
				color: 'var(--ck-highlight-marker-yellow)',
				type: 'marker'
			},
			{
				model: 'greenMarker',
				class: 'marker-green',
				title: 'Green marker',
				color: 'var(--ck-highlight-marker-green)',
				type: 'marker'
			},
			{
				model: 'redPen',
				class: 'pen-red',
				title: 'Red pen',
				color: 'var(--ck-highlight-pen-red)',
				type: 'pen'
			}
		]
	},

	indentBlock: {
		offset: 1,
		unit: 'em'
	},

	fontSize: {
		options: [
			'tiny',
			'small',
			'default',
			'big',
			'huge'
		]
	},

	fontFamily: {
		options: [
			'default',
			'Livvic, sans-serif',
			'Josefin Sans, sans-serif',
			'Ubuntu, Arial, sans-serif',
			'Ubuntu Mono, Courier New, Courier, monospace',
			'Times New Roman, Times, serif',
			'Comic Sans MS, cursive, sans-serif',
			'Akronim, cursive',

		]
	},

	alignment: {
		options: [
			'left',
			'center',
			'right',
			'justify'
		]
	},

	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:alignLeft',
			'imageStyle:alignCenter',
			'imageStyle:alignRight',
			'|',
			'imageTextAlternative'
		]
	},

	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
