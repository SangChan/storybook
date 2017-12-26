import path from 'path';
import hasDependency from '../hasDependency';

function test(options) {
  return (
    options.framework === 'react-native' ||
    (!options.framework && hasDependency('@storybook/react-native'))
  );
}

function load(options) {
  const storybook = require.requireActual('@storybook/react-native');

  const configPath = path.resolve(options.configPath || 'storybook');
  require.requireActual(configPath);

  return {
    framework: 'rn',
    storybook,
  };
}

export default {
  load,
  test,
};
