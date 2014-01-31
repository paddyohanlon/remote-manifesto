---
layout: post
title:  "Opening Git commit messages in Sublime Text, particularly after moving from TextMate"
description: After moving from TextMate to Sublime Text, how to open Git commit messages in Sublime.
categories: productivity
tags: Sublime Text
location: Girona, Catalonia
---

After switching from TextMate to [Sublime Text](http://www.sublimetext.com/) I failed to update the setting to open Git commit messages in my new text editor many times. When I did `git commit`, from the terminal, TextMate would open for me to log the commit message, which I liked a lot. I wanted that to work with Sublime.

The [Sublime Text docs for working in the terminal on a Mac](http://www.sublimetext.com/docs/2/osx_command_line.html) say, set up a symlink, so ‘subl’ can be used as a command. Like so:

    ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" ~/bin/subl

Then it seems that setting Sublime as ‘the editor for many commands’ would do the trick.

    export EDITOR='subl -w'

Unfortunately it didn’t and TextMate kept launching when I committed.

The missing piece was that I forgot I had explicitly set TextMate as my Git editor. To update that I did:

    git config --global core.editor "subl -n -w"

Here’s a video—sure to go viral—of my commit process: committing this post, writing the commit message in Sublime Text, and deploying to [GitHub Pages](http://pages.github.com/).<sup><a href="#git-commit-messages-footnote" id="git-commit-messages-footnote-link">&#8224;</a></sup>

<aside class="tangent" id="git-commit-messages-footnote"><p><b>&#8224;</b> My site runs on static-site generating CMS, [Jekyll](http://jekyllrb.com/) <a class="return-to-text" href="#git-commit-messages-footnote-link" title="Continue reading the main text"><b>Continue reading the main text </b>&#8629;</a></p></aside>

<div class="video">
  <iframe width="560" height="315" src="//www.youtube.com/embed/6BjR4DNILPw" frameborder="0" allowfullscreen></iframe>  
</div>
