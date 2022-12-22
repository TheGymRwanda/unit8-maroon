import PageLink from './Link';
import Svg from './Svg';

export default function HeaderLink() {
  return (
    <PageLink
      style='gap-2'
      link={'mailto:web3@apeunit.com'}
      text={'Contact'}
      textStyle='no-underline md:underline md:group-hover:no-underline'
      arrow={<Svg />}
    />
  );
}
