const env = {};

env.mode = '{{ __mode__ }}';
env.profile = '{{ __profile__ }}';
env.version = '{{ __version__ }}';
env.agent = '{{ __agent__ }}';
env.context = '{{ __context__ }}';

export default env;
