import adobeXd from '../app/assets/svg/skills/adobe-xd.svg';
import adobeaudition from '../app/assets/svg/skills/adobeaudition.svg';
import afterEffects from '../app/assets/svg/skills/after-effects.svg';
import angular from '../app/assets/svg/skills/angular.svg';
import aws from '../app/assets/svg/skills/aws.svg';
import azure from '../app/assets/svg/skills/azure.svg';
import blender from '../app/assets/svg/skills/blender.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import bulma from '../app/assets/svg/skills/bulma.svg';
import c from '../app/assets/svg/skills/c.svg';
import canva from '../app/assets/svg/skills/canva.svg';
import capacitorjs from '../app/assets/svg/skills/capacitorjs.svg';
import coffeescript from '../app/assets/svg/skills/coffeescript.svg';
import cplusplus from '../app/assets/svg/skills/cplusplus.svg';
import csharp from '../app/assets/svg/skills/csharp.svg';
import css from '../app/assets/svg/skills/css.svg';
import dart from '../app/assets/svg/skills/dart.svg';
import deno from '../app/assets/svg/skills/deno.svg';
import django from '../app/assets/svg/skills/django.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import dotnet from '../app/assets/svg/skills/dotnet.svg';
import dotnetcore from '../app/assets/svg/skills/dotnetcore.svg';
import fastapi from '../app/assets/svg/skills/fastapi.svg';
import fastify from '../app/assets/svg/skills/fastify.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';
import flutter from '../app/assets/svg/skills/flutter.svg';
import gcp from '../app/assets/svg/skills/gcp.svg';
import gimp from '../app/assets/svg/skills/gimp.svg';
import git from '../app/assets/svg/skills/git.svg';
import go from '../app/assets/svg/skills/go.svg';
import graphql from '../app/assets/svg/skills/graphql.svg';
import haxe from '../app/assets/svg/skills/haxe.svg';
import html from '../app/assets/svg/skills/html.svg';
import illustrator from '../app/assets/svg/skills/illustrator.svg';
import ionic from '../app/assets/svg/skills/ionic.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import julia from '../app/assets/svg/skills/julia.svg';
import kotlin from '../app/assets/svg/skills/kotlin.svg';
import kubernetes from '../app/assets/svg/skills/kubernetes.svg';
import lightroom from '../app/assets/svg/skills/lightroom.svg';
import linux from '../app/assets/svg/skills/linux.svg';
import markdown from '../app/assets/svg/skills/markdown.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import matlab from '../app/assets/svg/skills/matlab.svg';
import memsql from '../app/assets/svg/skills/memsql.svg';
import microsoftoffice from '../app/assets/svg/skills/microsoftoffice.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import nginx from '../app/assets/svg/skills/nginx.svg';
import numpy from '../app/assets/svg/skills/numpy.svg';
import nuxtJS from '../app/assets/svg/skills/nuxtJS.svg';
import opencv from '../app/assets/svg/skills/opencv.svg';
import pandas from '../app/assets/svg/skills/pandas.svg';
import photoshop from '../app/assets/svg/skills/photoshop.svg';
import php from '../app/assets/svg/skills/php.svg';
import picsart from '../app/assets/svg/skills/picsart.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import premierepro from '../app/assets/svg/skills/premierepro.svg';
import python from '../app/assets/svg/skills/python.svg';
import pytorch from '../app/assets/svg/skills/pytorch.svg';
import react from '../app/assets/svg/skills/react.svg';
import ruby from '../app/assets/svg/skills/ruby.svg';
import scikitlearn from '../app/assets/svg/skills/scikit-learn.svg';
import selenium from '../app/assets/svg/skills/selenium.svg';
import sketch from '../app/assets/svg/skills/sketch.svg';
import sqlalchemy from '../app/assets/svg/skills/sqlalchemy.svg';
import strapi from '../app/assets/svg/skills/strapi.svg';
import svelte from '../app/assets/svg/skills/svelte.svg';
import swift from '../app/assets/svg/skills/swift.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import tensorflow from '../app/assets/svg/skills/tensorflow.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import unity from '../app/assets/svg/skills/unity.svg';
import vitejs from '../app/assets/svg/skills/vitejs.svg';
import vue from '../app/assets/svg/skills/vue.svg';
import vuetifyjs from '../app/assets/svg/skills/vuetifyjs.svg';
import webix from '../app/assets/svg/skills/webix.svg';
import wolframalpha from '../app/assets/svg/skills/wolframalpha.svg';
import wordpress from '../app/assets/svg/skills/wordpress.svg';

// Lookup map: skill name (lowercase) → imported SVG module
const SKILLS_MAP = new Map([
  ['adobe xd', adobeXd],
  ['adobe audition', adobeaudition],
  ['after effects', afterEffects],
  ['angular', angular],
  ['aws', aws],
  ['azure', azure],
  ['blender', blender],
  ['bootstrap', bootstrap],
  ['bulma', bulma],
  ['c', c],
  ['c++', cplusplus],
  ['c#', csharp],
  ['canva', canva],
  ['capacitorjs', capacitorjs],
  ['coffeescript', coffeescript],
  ['css', css],
  ['dart', dart],
  ['deno', deno],
  ['django', django],
  ['docker', docker],
  ['.net', dotnet],
  ['.net core', dotnetcore],
  ['fastapi', fastapi],
  ['fastify', fastify],
  ['figma', figma],
  ['firebase', firebase],
  ['flutter', flutter],
  ['gcp', gcp],
  ['gimp', gimp],
  ['git', git],
  ['go', go],
  ['graphql', graphql],
  ['haxe', haxe],
  ['html', html],
  ['illustrator', illustrator],
  ['ionic', ionic],
  ['java', java],
  ['javascript', javascript],
  ['julia', julia],
  ['kotlin', kotlin],
  ['kubernetes', kubernetes],
  ['lightroom', lightroom],
  ['linux', linux],
  ['markdown', markdown],
  ['materialui', materialui],
  ['matlab', matlab],
  ['memsql', memsql],
  ['microsoft office', microsoftoffice],
  ['mongodb', mongoDB],
  ['mysql', mysql],
  ['next js', nextJS],
  ['nginx', nginx],
  ['numpy', numpy],
  ['nuxt js', nuxtJS],
  ['opencv', opencv],
  ['pandas', pandas],
  ['photoshop', photoshop],
  ['php', php],
  ['picsart', picsart],
  ['postgresql', postgresql],
  ['premiere pro', premierepro],
  ['python', python],
  ['pytorch', pytorch],
  ['react', react],
  ['ruby', ruby],
  ['sklearn', scikitlearn],
  ['selenium', selenium],
  ['sketch', sketch],
  ['sqlalchemy', sqlalchemy],
  ['strapi', strapi],
  ['svelte', svelte],
  ['swift', swift],
  ['tailwind', tailwind],
  ['tensorflow', tensorflow],
  ['typescript', typescript],
  ['unity', unity],
  ['vitejs', vitejs],
  ['vue', vue],
  ['vuetifyjs', vuetifyjs],
  ['webix', webix],
  ['wolframalpha', wolframalpha],
  ['wordpress', wordpress],
]);

/**
 * Returns the SVG image module for a given skill name.
 * @param {string} skill - Skill name (case-insensitive)
 * @returns {object|null} Imported SVG module or null if not found
 */
export const skillsImage = skill => SKILLS_MAP.get(skill?.toLowerCase());
