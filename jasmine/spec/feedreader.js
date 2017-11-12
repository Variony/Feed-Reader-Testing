$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has valid url', function() {
            allFeeds.forEach(function(feed) {
               expect(feed.url).toBeDefined();
               expect(feed.url).not.toBe("");
            });
        });

        it('has valid name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe("");
            });
        });

    });

    describe('The menu', function() {

        it('default is hidden', function () {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        it('changes', function() {

            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

    });

    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('load success', function (done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    });

    describe('New Feed Selection', function () {
        let originalHtml = '';
        beforeEach(function (done) {
            loadFeed(0, function() {
                originalHtml = $('.feed').html();
                loadFeed(1, done);
            });

        });

        it('Changes content', function (done) {
            expect($('.feed').html()).not.toBe(originalHtml);
            done();
        })
    });


}());
