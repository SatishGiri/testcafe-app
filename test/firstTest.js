import { Selector } from 'testcafe';
fixture ('firstTest');
  test
     .page('http://devexpress.github.io/testcafe/blog/');
    ('My test', async t => {
         console.log("my first test");
    });
test
    .page ('http://demoqa.com/text-box');
    ('My test', async t => {
        console.log("Demo QA site");
    });
