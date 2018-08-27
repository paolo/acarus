import { Random } from 'meteor/random';

const someExamples = [{
	'url': 'https://github.com/fogleman/Craft',
	'title': 'Craft: A simple Minecraft clone written in C using OpenGL shaders'
}, {
	'url': 'https://motherboard.vice.com/en_us/article/9kmj4v/spyware-company-spyfone-terabytes-data-exposed-online-leak',
	'title': 'Spyware Company Leaves ‘Terabytes’ of Selfies, Messages, Location Data Exposed'
}, {
	'url': 'https://marc.info/?l=openbsd-tech&m=153504937925732&w=2',
	'title': 'Disable SMT/Hyperthreading in all Intel BIOSes'
}, {
	'url': 'https://www.home-assistant.io/',
	'title': 'Home Assistant: Open-source home automation platform running on Python 3'
}, {
	'url': 'https://jepsen.io/analyses/dgraph-1-0-2',
	'title': 'Jepsen: Dgraph 1.0.2'
}, {
	'url': 'https://tech.buzzfeed.com/unleashing-the-a6a1a5da39d6',
	'title': 'Show HN: BuzzFeed open source SSO'
}, {
	'url': 'https://www.technologyreview.com/s/611896/life-as-a-bug-bounty-hunter/',
	'title': 'Life as a bug bounty hunter'
}, {
	'url': 'https://www.ifixit.com/Teardown/Magic+Leap+One+Teardown/112245',
	'title': 'Magic Leap One Teardown'
}, {
	'url': 'https://hackernoon.com/8-mistakes-we-made-in-our-companys-first-8-years-3d38422333b',
	'title': 'Mistakes we made in our Company’s First 8 Years'
}, {
	'url': 'https://newrepublic.com/article/150497/vanishing-idealism-burning-man',
	'title': 'The Vanishing Idealism of Burning Man'
}, {
	'url': 'http://johnny-five.io/news/v1_0/',
	'title': 'Johnny-Five v1.0 – JavaScript Robotics and IoT Framework'
}, {
	'url': 'https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-alam.pdf',
	'title': 'Single-decryption EM-based attack reveals private keys from Android phones [pdf]'
}, {
	'url': 'https://www.marketwatch.com/story/netflix-is-the-latest-company-to-try-bypassing-apples-app-store-2018-08-23',
	'title': 'Netflix is the latest company to try bypassing Apple’s app store'
}, {
	'url': 'https://chem.tufts.edu/answersinscience/relativityofwrong.htm',
	'title': 'The Relativity of Wrong (1989)'
}, {
	'url': 'https://blog.torservers.net/20180704/coordinated-raids-of-zwiebelfreunde-at-various-locations-in-germany.html#update',
	'title': 'Court has confirmed coordinated raids of Zwiebelfreunde in Germany were illegal'
}, {
	'url': 'https://www.theatlantic.com/entertainment/archive/2018/08/when-poetry-isnt-poetry/567571/?single_page=true',
	'title': 'Poetry Is Everywhere'
}, {
	'url': 'http://pu.inf.uni-tuebingen.de/users/klaeren/epigrams.html',
	'title': 'Epigrams on Programming (1982)'
}, {
	'url': 'https://www.tomshardware.com/news/intel-cpu-microcode-benchmark-mitigation,37684.html',
	'title': 'Intel Responds to Complaints About Microcode Benchmarking Ban'
}, {
	'url': 'https://www.prospectmagazine.co.uk/magazine/early-diagnosis-cancer-screening-women-risk',
	'title': 'The Dark Side of Early Diagnosis'
}, {
	'url': 'https://www.wired.com/story/stratolaunch-airplane-burt-rutan-paul-allen/',
	'title': '385 Feet of Crazy: The Most Audacious Flying Machine'
}, {
	'url': 'https://www.sec.gov/Archives/edgar/data/1475115/000119312518255960/d593770ds1.htm',
	'title': 'Eventbrite S-1'
}, {
	'url': 'https://www.bloomberg.com/news/features/2018-08-22/nobody-trusts-facebook-twitter-is-a-hot-mess-what-is-snap-s-evan-spiegel-doing',
	'title': 'Nobody Trusts Facebook, Twitter Is a Hot Mess, What Is Snapchat Doing?'
}, {
	'url': 'https://www.fun-mooc.fr/courses/course-v1:parisdiderot+56002+session03/about',
	'title': 'Introduction to Functional Programming in OCaml'
}, {
	'url': 'https://www.theverge.com/circuitbreaker/2018/8/21/17765330/mayfield-robotics-kuri-robot-shutting-down',
	'title': 'The company behind the adorably doomed robot Kuri is shutting down'
}, {
	'url': 'https://perens.com/2018/08/22/new-intel-microcode-license-restriction-is-not-acceptable/',
	'title': 'Intel Publishes Microcode Patches, No Benchmarking or Comparison Allowed'
}, {
	'url': 'https://www.trackinghappiness.com/happy-in-love-happiness-through-love-part-1/',
	'title': 'Quantifying happiness in my relationship with data'
}, {
	'url': 'https://www.cnet.com/news/sending-tiny-spacecraft-to-alpha-centauri',
	'title': 'Are we alone? Tiny spacecraft will head to Alpha Centauri to find out'
}, {
	'url': 'https://ianring.com/musictheory/scales/',
	'title': 'A study of musical scales (2017)'
}, {
	'url': 'https://humaninterest.com/careers',
	'title': 'Human  Interest (YC S15) Is Growing Fast and Hiring a Staff Software Engineer'
}, {
	'url': 'https://mosaicscience.com/story/why-i-pull-out-my-hair-trich-ocd-bfrbs-therapy/',
	'title': 'Why I Pull Out My Hair'
}, {
	'url': 'https://www.livescience.com/63398-ancient-quasars-evidence-quantum-entanglement.html',
	'title': 'Ancient Quasars Provide Evidence for Quantum Entanglement'
}, {
	'url': 'https://newrepublic.com/article/150579/little-women-endures-louisa-may-alcott-anne-boyd-rioux',
	'title': 'Why "Little Women" Endures'
}, {
	'url': 'https://www.johndcook.com/blog/2018/08/22/globe-regular-solids/',
	'title': 'Projecting the globe onto regular solids'
}, {
	'url': 'https://www.youtube.com/watch?v=pQa_tWZmlGs',
	'title': 'What does genius look like in math? Where does it come? Dandelin spheres [video]'
}, {
	'url': 'https://rob.conery.io/2018/08/21/mod-and-remainder-are-not-the-same/',
	'title': 'Mod and remainder are not the same'
}, {
	'url': 'https://a9t9.com/kantu/docs/visual-ui-testing',
	'title': 'Visual UI Regression Testing with WebAssembly and the Kantu Selenium IDE'
}, {
	'url': 'https://www.bloomberg.com/news/articles/2018-08-20/why-some-techies-are-shunning-silicon-valley-for-japanese-dream',
	'title': 'Some Techies Are Shunning Silicon Valley for the Japanese Dream'
}, {
	'url': 'https://www.jtolio.com/2017/03/whiteboard-problems-in-pure-lambda-calculus/',
	'title': 'Whiteboard problems in pure Lambda Calculus (2017)'
}, {
	'url': 'https://twitter.com/boom_cpu/status/1032447070928396289',
	'title': 'RISC-V Boom CPU'
}, {
	'url': 'http://www.bl.uk/manuscripts/FullDisplay.aspx?ref=Arundel_MS_263',
	'title': 'Codex Arundel – A collection of papers written by Leonardo da Vinci'
}, {
	'url': 'https://dejanseo.com.au/competitor-hack/',
	'title': 'How I recorded user behaviour on my competitor’s websites'
}, {
	'url': 'https://hmijailblog.blogspot.com/2018/08/you-could-have-invented-lmax-disruptor.html',
	'title': 'You could have invented the LMAX Disruptor, if only you were limited enough'
}, {
	'url': 'https://hmijailblog.blogspot.com/2015/08/fred-brooks-vs-dijkstra.html',
	'title': 'Fred Brooks vs. Dijkstra? (2015)'
}, {
	'url': 'https://github.com/felixrieseberg/windows95',
	'title': 'Show HN: Windows 95 in an Electron App'
}, {
	'url': 'https://blog.ndk.io/clojure-compilation.html',
	'title': 'Clojure Compilation (2014)'
}, {
	'url': 'https://arstechnica.com/?p=1363339',
	'title': 'Apple confirms TV series order of Asimov’s Foundation'
}, {
	'url': 'https://p.migdal.pl/weltschmerz/',
	'title': 'Show HN: Weltschmerz by age'
}, {
	'url': 'https://www.activesphere.com/blog/2018/08/05/high-contention-allocator',
	'title': 'FoundationDB high contention allocator'
}, {
	'url': 'https://github.com/SystemsApproach/book',
	'title': 'The Book “Computer Networks: A Systems Approach” is now open source'
}, {
	'url': 'https://www.technologyreview.com/s/611832/future-elections-may-be-swayed-by-intelligent-weaponized-chatbots/',
	'title': 'Future elections may be swayed by chatbots'
}, {
	'url': 'https://lists.gforge.inria.fr/pipermail/cado-nfs-discuss/2018-August/000926.html',
	'title': 'RSA-230 has been factored'
}, {
	'url': 'https://medium.com/@aliceminium/the-dark-reality-behind-americas-greatest-thrift-store-empire-183967087a1e',
	'title': 'The Dark Reality Behind America’s Greatest Thrift Store Empire'
}, {
	'url': 'http://joeyh.name/blog/entry/Dear_Ad_Networks/',
	'title': 'Dear Ad Networks'
}, {
	'url': 'https://www.influxdata.com/blog/its-time-for-the-open-source-community-to-get-real/',
	'title': 'Open source takes continued investment, and that must be subsidized somehow'
}, {
	'url': 'https://techcrunch.com/2018/08/22/australia-bans-huawei-and-zte-from-supplying-technology-for-its-5g-network/',
	'title': 'Australia bans Huawei and ZTE from supplying technology for its 5G network'
}, {
	'url': 'https://beta.observablehq.com/@mateogianolio/complex-numbers-in-javascript',
	'title': 'Complex numbers in JavaScript'
}, {
	'url': 'https://www.atlasobscura.com/articles/best-superstores-architecture',
	'title': 'The Apocalyptic Architecture of One 1970s Retail Chain'
}, {
	'url': 'https://github.com/donnemartin/interactive-coding-challenges',
	'title': 'Python coding interview challenges'
}, {
	'url': 'https://blog.prismatik.com.au/checking-code-style-with-neural-networks-f9e7a05553e7',
	'title': 'Checking Code Style with Neural Networks (2017)'
}, {
	'url': 'https://blog.cryptographyengineering.com/2015/10/22/a-riddle-wrapped-in-curve/',
	'title': 'A riddle wrapped in a curve (2015)'
}, {
	'url': 'https://blog.cryptographyengineering.com/2015/10/22/a-riddle-wrapped-in-curve/',
	'title': 'A riddle wrapped in a curve (2015)'
}, {
	'url': 'https://news.ycombinator.com/item?id=17819771',
	'title': 'Ask HN: Codebase at my work is a complete mess, what should I do?'
}, {
	'url': 'https://pypyjs.org/',
	'title': 'PyPy.js: Python in the web browser'
}, {
	'url': 'https://www.youtube.com/watch?v=dYXIgOaU1zw',
	'title': 'OpenAI Five at Dota 2 – The International [video]'
}, {
	'url': 'https://www.axios.com/google-finds-evidence-of-attack-linked-to-iran-backed-media-1535046370-573d2b45-06eb-4499-802f-dcd8e8076bf7.html',
	'title': 'Google finds evidence of attack linked to Iran state media'
}, {
	'url': 'https://www.nytimes.com/2018/08/21/opinion/happiness-inequality-prosperity-.html',
	'title': 'Why Prosperity Has Increased but Happiness Has Not'
}, {
	'url': 'https://sketch.sh/',
	'title': 'Show HN: Sketch.sh - Interactive OCaml and ReasonML Sketchbook'
}, {
	'url': 'https://www.cnet.com/news/lyft-will-offer-discounted-rides-to-voters-during-midterm-elections/',
	'title': 'Lyft will offer discounted rides to voters during midterm elections'
}, {
	'url': 'https://johnhw.github.io/umap_primes/index.md.html',
	'title': 'A visualization of the prime factors of the first million integers'
}, {
	'url': 'https://arstechnica.com/science/2018/08/cosmic-rays-could-help-unlock-the-secrets-of-brunelleschis-dome/',
	'title': 'Italy’s famous dome is cracking, and muon imaging may help'
}, {
	'url': 'https://randomascii.wordpress.com/2018/08/22/24-core-cpu-and-i-cant-type-an-email-part-two/',
	'title': '24-core CPU and I can’t type an email – part two'
}, {
	'url': 'https://gizmodo.com/meet-the-nuclear-weapons-nerds-1826964319',
	'title': 'Nuclear Weapons Nerds'
}, {
	'url': 'http://www.latimes.com/politics/essential/la-pol-ca-essential-politics-may-2018-los-angeles-gets-the-state-s-approval-1534946283-htmlstory.html',
	'title': 'L.A. County gets state approval of new open-source vote-counting system'
}, {
	'url': 'https://www.commentarymagazine.com/articles/lost-world-weegee/',
	'title': 'The Lost World of Weegee'
}, {
	'url': 'https://www.nature.com/articles/d41586-018-06004-0',
	'title': 'Mum’s a Neanderthal, Dad’s a Denisovan: discovery of an ancient-human hybrid'
}, {
	'url': 'http://felleisen.org/matthias/OnHtDP/index.html',
	'title': 'On HtDP'
}, {
	'url': 'https://www.bloomberg.com/news/articles/2018-08-22/apple-and-google-face-growing-revolt-over-app-store-tax',
	'title': 'Apple and Google Face Growing Revolt Over App Store ‘Tax’'
}, {
	'url': 'https://vancouversun.com/health/local-health/ubc-researchers-have-found-a-way-to-make-all-donated-blood-universal',
	'title': 'UBC researchers may have found a way to make donated blood universal'
}, {
	'url': 'https://paragonie.com/blog/2018/08/security-concerns-surrounding-webauthn-don-t-implement-ecdaa-yet',
	'title': 'Security Concerns Surrounding WebAuthn: Don\'t Implement ECDAA (Yet)'
}, {
	'url': 'https://www.wsj.com/articles/facebook-to-remove-data-security-app-from-apple-store-1534975340',
	'title': 'Facebook to Remove Onavo App from Apple Store'
}, {
	'url': 'https://github.com/suragnair/alpha-zero-general',
	'title': 'A clean implementation based on AlphaZero for any game in any framework'
}, {
	'url': 'https://zero-to-jupyterhub.readthedocs.io/en/latest/',
	'title': 'Zero to JupyterHub with Kubernetes'
}, {
	'url': 'https://netzhansa.blogspot.com/2018/08/evaluating-vax-lisp-30.html',
	'title': 'Evaluating Vax Lisp 3.1'
}, {
	'url': 'https://www.bloomberg.com/news/articles/2018-08-22/driverless-startup-zoox-said-to-remove-ceo-in-sudden-move',
	'title': 'Driverless Startup Zoox Suddenly Removes CEO'
}, {
	'url': 'https://www.reuters.com/article/us-health-lifeexpectancy/life-expectancy-declines-seen-in-u-s-and-other-high-income-countries-idUSKCN1L723R',
	'title': 'Life expectancy declines seen in U.S. and other high-income countries'
}, {
	'url': 'http://www.flownet.com/ron/lambda-calculus.html',
	'title': 'Factorials in pure lambda calculus (2014)'
}, {
	'url': 'https://www.nytimes.com/2018/08/23/technology/fireeye-facebook-disinformation.html',
	'title': 'How FireEye Helped Facebook Spot a Disinformation Campaign'
}, {
	'url': 'https://mattwarren.org/2018/08/21/Monitoring-and-Observability-in-the-.NET-Runtime/',
	'title': 'Monitoring and Observability in the .NET Runtime'
}, {
	'url': 'https://www.reuters.com/article/us-saudi-aramco-ipo-exclusive/exclusive-aramco-listing-plan-halted-oil-giant-disbands-advisors-sources-idUSKCN1L71TZ',
	'title': 'Aramco listing plan halted, oil giant disbands advisors – sources'
}, {
	'url': 'https://phys.org/news/2018-08-depression-seafloor-whales-prospective-sites.html',
	'title': 'Depression marks on seafloor suggest whales visiting prospective mining sites'
}]; 

const someUsers = ['Ron Rivest', 'Adi Shamir', 'Leonard Adleman'];

if (Posts.find().count() === 0) {
  const now = new Date().getTime();

  someUsers.forEach(element => {
    Meteor.users.insert({
      profile: { name: element }
    });  
  });
  
  const allUsers = Meteor.users.find().fetch();

  someExamples.forEach(element => {
    const owner = Random.choice(allUsers);
    Posts.insert({
      title: element.title,
      author: owner.profile.name,
      userId: owner._id,
      url: element.url,
      submitted: new Date(now - (3600 * 1000 * 24 * Random.fraction() * 100)),
      commentsCount: 0,
      upvoters: [], votes: Math.round(Random.fraction() * 10000)
    });
  });
}
