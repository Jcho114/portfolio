import Prism from 'prismjs';

export default function covertCodeToHtml(code, language) {
	return Prism.highlight(code, Prism.languages[language], language);
}
