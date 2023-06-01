export const generateScript = () => {
	const minParagraphs = 3;
	const maxParagraphs = 5;
	const minWordsPerParagraph = 500;
	const maxWordsPerParagraph = 1000;

	const _loremIpsumText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

	const loremIpsumText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sed libero enim sed faucibus turpis in. Mattis molestie a iaculis at erat pellentesque. Eget egestas purus viverra accumsan in nisl. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Non sodales neque sodales ut etiam sit amet nisl purus. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Id semper risus in hendrerit gravida rutrum. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Ut faucibus pulvinar elementum integer enim neque volutpat ac. \n\n Bibendum ut tristique et egestas. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Ac felis donec et odio. A arcu cursus vitae congue mauris rhoncus aenean vel. Id leo in vitae turpis. Ac auctor augue mauris augue neque gravida. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Id cursus metus aliquam eleifend mi in nulla. Sit amet volutpat consequat mauris nunc. Feugiat pretium nibh ipsum consequat. Ullamcorper a lacus vestibulum sed arcu non. Nulla posuere sollicitudin aliquam ultrices sagittis. Enim praesent elementum facilisis leo vel fringilla. Nascetur ridiculus mus mauris vitae. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Malesuada fames ac turpis egestas sed tempus.";

	const loremIpsumParagraphs = loremIpsumText.trim().split("\n\n");

	const numParagraphs =
		Math.floor(Math.random() * (maxParagraphs - minParagraphs + 1)) +
		minParagraphs;

	let generatedText = "";
	for (let i = 0; i < numParagraphs; i++) {
		const randomParagraphIndex = Math.floor(
			Math.random() * loremIpsumParagraphs.length
		);
		const randomParagraph = loremIpsumParagraphs[randomParagraphIndex];

		const numWords =
			Math.floor(
				Math.random() * (maxWordsPerParagraph - minWordsPerParagraph + 1)
			) + minWordsPerParagraph;
		const words = randomParagraph.split(" ");
		const selectedWords = words.slice(0, numWords);
		const generatedParagraph = selectedWords.join(" ");

		generatedText += generatedParagraph + " ";
	}

	// console.log(numParagraphs);
	return generatedText.trim();
};
