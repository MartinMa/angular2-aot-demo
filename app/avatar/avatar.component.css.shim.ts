/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

export const styles:any[] = ['.flip-container[_ngcontent-%COMP%] {\n	perspective: 800px;\n}\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n\n[_nghost-%COMP%].flip   .flip-container[_ngcontent-%COMP%]   .flipper[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  -webkit-transform: rotateY(180deg);\n}\n\n.flip-container[_ngcontent-%COMP%], .front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\n	width: 99%;\n	height: 99%;\n}\n\n.flipper[_ngcontent-%COMP%] {\n	transition: transform 0.3s;\n	transition: -webkit-transform 0.3s;\n	transform-style: preserve-3d;\n	-webkit-transform-style: preserve-3d;\n	position: relative;\n}\n\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\n	backface-visibility: hidden;\n	-webkit-backface-visibility: hidden;\n	position: absolute;\n	top: 0;\n	left: 0;\n}\n\n.front[_ngcontent-%COMP%] {\n	z-index: 2;\n	transform: rotateY(0deg);\n	-webkit-transform: rotateY(0deg);\n}\n\n.back[_ngcontent-%COMP%] {\n	transform: rotateY(180deg);\n	-webkit-transform: rotateY(180deg);\n}\n\nimg[_ngcontent-%COMP%] {\n  cursor: pointer;\n	transition: transform 0.1s ease-in-out;\n	-webkit-transition: -webkit-transform 0.1s ease-in-out;\n}\n\nimg[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n	animation: pop 0.3s;\n	-webkit-animation: pop 0.3s;\n}\n\n@keyframes pop {\n	0% { transform: scale(1) }\n	70% { transform: scale(1.25) }\n	100% { transform: scale(1) }\n}\n\n@-webkit-keyframes pop {\n	0% { transform: scale(1) }\n	70% { transform: scale(1.25) }\n	100% { transform: scale(1) }\n}'];