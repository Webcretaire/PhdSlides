<script>
    import AddMpiStack                       from './slides/AddMpiStack.svelte';
    import ClusterHpc                        from './slides/ClusterHpc.svelte';
    import ComparaisonModeles                from './slides/ComparaisonModeles.svelte';
    import Conclusion                        from './slides/Conclusion.svelte';
    import DetailMachine                     from './slides/DetailMachine.svelte';
    import FatTree                           from './slides/FatTree.svelte';
    import FlowControlExp                    from './slides/FlowControlExp.svelte';
    import HpcEtSimu                         from './slides/HpcEtSimu.svelte';
    import HplSkeleton                       from './slides/HplSkeleton.svelte';
    import IllustrationApplis                from './slides/IllustrationApplis.svelte';
    import ModelChangeOsu                    from './slides/ModelChangeOsu.svelte';
    import ModelChangeQuicksilverPerformance from './slides/ModelChangeQuicksilverPerformance.svelte';
    import ModelChangeQuicksilverPrecision   from './slides/ModelChangeQuicksilverPrecision.svelte';
    import ModelChangeStack                  from './slides/ModelChangeStack.svelte';
    import ModeleS4BXI                       from './slides/ModeleS4BXI.svelte';
    import MpiAtos                           from './slides/MpiAtos.svelte';
    import OsuResults                        from './slides/OsuResults.svelte';
    import PilesLogicielles                  from './slides/PilesLogicielles.svelte';
    import Plan                              from './slides/Plan.svelte';
    import PlateformeS4BXI                   from './slides/PlateformeS4BXI.svelte';
    import PmixSimu                          from './slides/PmixSimu.svelte';
    import PresentationBxi                   from './slides/PresentationBxi.svelte';
    import PtlPerf                           from './slides/PtlPerf.svelte';
    import PtlPerfSequence                   from './slides/PtlPerfSequence.svelte';
    import PtlPerfStack                      from './slides/PtlPerfStack.svelte';
    import Quicksilver                       from './slides/Quicksilver.svelte';
    import Relink                            from './slides/Relink.svelte';
    import Title                             from './slides/Title.svelte';
    import UsagesHpc                         from './slides/UsagesHpc.svelte';
    import UsageSimu                         from './slides/UsageSimu.svelte';
    import FlowControlResultPortals          from './slides/FlowControlResultPortals.svelte';
    import FlowControlResultMpi              from './slides/FlowControlResultMpi.svelte';
    import BackupModelChangeSpatial          from './slides/BackupModelChangeSpatial.svelte';
    import BackupCourbeSHMEM                 from './slides/BackupCourbeSHMEM.svelte';
</script>

<Title />
<UsagesHpc />
<ClusterHpc />
<HpcEtSimu />
<Plan />
<Plan visibility="uncounted">
    <p class="absolute w-24 block text-7xl right-[18rem] top-[26rem] d-shadow-sm">
        &rarr;
    </p>
    <span class="absolute w-24 block text-4xl right-[21rem] top-[26rem] mt-9 d-shadow-sm text-amgreen"
          data-id="nb_plan">2.</span>
    <div data-id="red_line"
         class="border-l-4 border-red-600 border-solid rounded-md w-[15.2rem] h-[9rem] absolute right-[4rem] z-40 top-[25rem]"></div>
</Plan>
<Plan visibility="uncounted">
    <p class="absolute w-24 block text-7xl right-[18rem] top-[18.6rem] d-shadow-sm">
        &rarr;
    </p>
    <span class="absolute w-24 block text-4xl right-[21rem] top-[18.6rem] mt-9 d-shadow-sm text-amgreen"
          data-id="nb_plan">3.</span>
    <div data-id="red_line"
         class="border-l-4 border-red-600 border-solid rounded-md w-[15.2rem] h-[5.5rem] absolute right-[4rem] z-40 top-[19.4rem]"></div>
</Plan>
<Plan visibility="uncounted">
    <p class="absolute w-24 block text-7xl right-[18rem] top-[15.9rem] d-shadow-sm">
        &rarr;
    </p>
    <span class="absolute w-24 block text-4xl right-[21rem] top-[15.9rem] mt-9 d-shadow-sm text-amgreen"
          data-id="nb_plan">4.</span>
</Plan>
<Plan highlight="context" visibility="uncounted" />
<DetailMachine />
<PresentationBxi />
<UsageSimu />
<PilesLogicielles />
<Plan highlight="low-level" image="simu_objective_ompi">
    <p class="absolute w-24 block text-7xl right-[17.8rem] top-[23.2rem] d-shadow-sm z-50">
        &rarr;
    </p>
    <div class="border-4 border-red-600 border-solid rounded-md w-[15.2rem] h-[16rem] absolute right-[4rem] z-40 top-[20.4rem]"></div>
    <p class="absolute left-20 -bottom-6 text-xl text-left text-orange-300 text-left">
        [J.Emmanuel, M.Moy, L.Henrio, G.Pichon. Simulation of the Portals 4 <br />
        protocol, and case study on the BXI interconnect. HPCS 2020]
    </p>
</Plan>
<PresentationBxi secondTime />
<PlateformeS4BXI onlyLast={false} />
<ModeleS4BXI />
<PlateformeS4BXI onlyLast={true} />
<Relink />
<PtlPerfStack />
<PtlPerfSequence />
<PtlPerf />
<Plan highlight="high-level" image="simu_objective_ompi">
    <p class="absolute w-24 block text-7xl right-[17.8rem] top-[14.8rem] d-shadow-sm z-50">
        &rarr;
    </p>
    <div class="border-4 border-red-600 border-solid rounded-md w-[15.2rem] h-[4.8rem] absolute right-[4rem] z-40 top-[16rem]"></div>
    <p class="absolute left-20 -bottom-6 text-xl text-left text-orange-300 text-left">
        [J.Emmanuel, M.Moy, L.Henrio, G.Pichon. S4BXI: <br />
        the MPI-ready Portals 4 Simulator. MASCOTS 2021]
    </p>
</Plan>
<MpiAtos />
<AddMpiStack />
<FatTree />
<PmixSimu />
<ComparaisonModeles />
<IllustrationApplis />
<OsuResults />
<Quicksilver />
<HplSkeleton />
<Plan highlight="model-change" image="simu_objective_ompi">
    <p class="absolute w-24 block text-7xl right-[16.9rem] top-[12.6rem] d-shadow-sm z-50">
        &rarr;
    </p>
</Plan>
<ModelChangeStack />
<ModelChangeOsu />
<ModelChangeQuicksilverPrecision />
<ModelChangeQuicksilverPerformance />
<FlowControlExp />
<!--<FlowControlResults />-->
<FlowControlResultPortals />
<FlowControlResultMpi />
<Conclusion />
<BackupModelChangeSpatial />
<BackupCourbeSHMEM />
