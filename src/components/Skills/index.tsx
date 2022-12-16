import BlockText from '../BlockText';
import Title from '../Title';
import View from '../View';

export default function Test(): JSX.Element {
  return (
    <View id="skills">
      <Title data-aos="fade-right">Skills</Title>
      <BlockText text="Rust" />
      <BlockText text="NestJS" />
      <BlockText text="TypeScript" />
      <BlockText text="Express" />
      <BlockText text="NodeJS" />
      <BlockText text="React" />
    </View>
  );
}
